import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings/all");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/delete/${id}`, {
      method: "DELETE",
    });

    setBookings(bookings.filter((b) => b._id !== id));
  };

  const approveBooking = async (id) => {
    const res = await fetch(
      `http://localhost:5000/api/bookings/approve/${id}`,
      { method: "PUT" }
    );

    const updated = await res.json();

    setBookings(
      bookings.map((b) => (b._id === id ? updated : b))
    );
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg">Total Bookings</h2>
          <p className="text-3xl font-bold">{bookings.length}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg">Pending</h2>
          <p className="text-3xl font-bold">
            {bookings.filter((b) => b.status === "Pending").length}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg">Confirmed</h2>
          <p className="text-3xl font-bold">
            {bookings.filter((b) => b.status === "Confirmed").length}
          </p>
        </div>
      </div>

      {/* Booking Table */}
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-center">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t border-gray-700">

                <td className="p-3">{b.name}</td>
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
                    className="bg-green-500 px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => deleteBooking(b._id)}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}