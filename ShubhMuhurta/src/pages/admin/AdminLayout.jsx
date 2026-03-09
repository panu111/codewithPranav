javascript
import { useEffect, useState } from "react";

export default function AdminBookings() {
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Admin Bookings
      </h1>

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
          {bookings.map((b) => (
            <tr key={b._id} className="text-center border border-gray-700">
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

