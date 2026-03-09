import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] p-6 space-y-6">

        <h2 className="text-2xl font-bold text-yellow-400">
          Admin Panel
        </h2>

        <nav className="flex flex-col space-y-3">

          <Link to="/admin/dashboard" className="hover:text-yellow-400">
            Dashboard
          </Link>

          <Link to="/admin/bookings" className="hover:text-yellow-400">
            Bookings
          </Link>

          <Link to="/admin/calendar" className="hover:text-yellow-400">
            Calendar
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("admin");
              window.location.href = "/admin-login";
            }}
            className="text-left hover:text-red-400"
          >
            Logout
          </button>

        </nav>

      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}

