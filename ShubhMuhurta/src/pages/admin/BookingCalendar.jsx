import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function BookingCalendar() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/bookings/all")
      .then((res) => res.json())
      .then((data) => setBookings(data));

  }, []);

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Booking Calendar
      </h1>

      <div className="grid grid-cols-3 gap-4">

        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-gray-800 p-4 rounded-lg"
          >

            <p className="text-lg font-semibold">{b.name}</p>

            <p>{b.service}</p>

            <p className="text-yellow-400">{b.date}</p>

          </div>
        ))}

      </div>

    </AdminLayout>
  );
}

