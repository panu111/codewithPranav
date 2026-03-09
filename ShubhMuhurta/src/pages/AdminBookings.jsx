import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

export default function AdminBookings() {

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Fetch bookings
  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings/all");

      if (!res.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await res.json();
      setBookings(data);

    } catch (error) {
      console.error("Error loading bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Delete booking
  const deleteBooking = async (id) => {
    try {

      await fetch(`http://localhost:5000/api/bookings/delete/${id}`, {
        method: "DELETE",
      });

      setBookings(bookings.filter((b) => b._id !== id));

    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Approve booking
  const approveBooking = async (id) => {
    try {

      const res = await fetch(
        `http://localhost:5000/api/bookings/approve/${id}`,
        { method: "PUT" }
      );

      const updated = await res.json();

      setBookings(
        bookings.map((b) =>
          b._id === id ? updated : b
        )
      );

    } catch (error) {
      console.error("Approve failed:", error);
    }
  };

  // Search + Filter logic
  const filteredBookings = bookings.filter((b) => {

    const matchSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search);

    const matchStatus =
      statusFilter === "All" || b.status === statusFilter;

    return matchSearch && matchStatus;
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
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
        </select>

      </div>

      {/* Booking Table */}
      <table className="w-full border border-gray-700">

        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Service</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
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
                  {b.status === "Pending" ? (
                    <span className="text-yellow-400">Pending</span>
                  ) : (
                    <span className="text-green-400">Confirmed</span>
                  )}
                </td>

                <td className="space-x-2">

                  <button
                    onClick={() => approveBooking(b._id)}
                    className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => deleteBooking(b._id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
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

