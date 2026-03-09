import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings/all");
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Error loading bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bookings/delete/${id}`, {
        method: "DELETE",
      });

      setBookings(bookings.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const approveBooking = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/approve/${id}`,
        { method: "PUT" }
      );

      const result = await res.json();

      setBookings(
        bookings.map((b) =>
          b._id === id ? result.booking || result : b
        )
      );
    } catch (error) {
      console.error("Approve failed", error);
    }
  };

  const rejectBooking = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/reject/${id}`,
        { method: "PUT" }
      );

      const result = await res.json();

      setBookings(
        bookings.map((b) =>
          b._id === id ? result.booking || result : b
        )
      );

    } catch (error) {
      console.error("Reject failed", error);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      (b.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (b.phone || "").includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      (b.status || "").toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Admin Bookings
      </h1>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white w-64"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Booking Table */}
      <table className="w-full border border-gray-700">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredBookings.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4">
                No bookings found
              </td>
            </tr>
          ) : (
            filteredBookings.map((b) => (
              <tr key={b._id} className="text-center border">
                <td>{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.service}</td>
                <td>{b.date}</td>

                <td>
                  {b.status === "approved" && (
                    <span className="text-green-400 font-semibold">
                      Approved
                    </span>
                  )}

                  {b.status === "pending" && (
                    <span className="text-yellow-400 font-semibold">
                      Pending
                    </span>
                  )}

                  {b.status === "rejected" && (
                    <span className="text-red-400 font-semibold">
                      Rejected
                    </span>
                  )}
                </td>

                <td className="flex justify-center gap-2 py-2">

                  <button
                    onClick={() => approveBooking(b._id)}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => rejectBooking(b._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => deleteBooking(b._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}