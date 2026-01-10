import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ui/button";
import Signup from "./Signup";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ashaId: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP AUTH (replace with backend)
    if (form.ashaId && form.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ASHA Worker Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="ASHA Worker ID"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, ashaId: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <Button className="w-full">Login</Button>
        </form>

        <p className="text-sm text-center mt-4">
          New ASHA Worker?{" "}
          <Link to="/signup" className="text-emerald-600 font-medium">
            Request Access
        
          </Link>
        </p>
      </div>
    </div>
  );
}
