import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#0f172a] text-white p-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-8">
        🔱 Admin Panel
      </h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-yellow-400">
          Dashboard
        </Link>

        <Link to="/" className="block hover:text-yellow-400">
          Back to Site
        </Link>
      </nav>
    </div>
  );
}