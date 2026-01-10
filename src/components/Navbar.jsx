import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-emerald-600">
          Health Monitoring System
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/dashboard"
            className="text-slate-700 hover:text-emerald-600"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/add-patient"
            className="text-slate-700 hover:text-emerald-600"
          >
            Add Patient
          </NavLink>

          <NavLink
            to="/patients"
            className="text-slate-700 hover:text-emerald-600"
          >
            Patients
          </NavLink>

          <button
            onClick={() => navigate("/login")}
            className="text-red-500 hover:text-red-600 font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}