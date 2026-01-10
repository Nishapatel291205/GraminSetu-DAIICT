import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/button";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    ashaId: "",
    state: "",
    masterKey: "",
    password: "",
  });

  const validateKey = () => {
    return form.masterKey.startsWith(
      form.state.toUpperCase() + "-ASHA"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateKey()) {
      alert("Invalid Government ASHA Master Key");
      return;
    }

    // Backend signup logic later
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ASHA Worker Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            placeholder="ASHA Worker ID"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, ashaId: e.target.value })
            }
            required
          />

          <input
            placeholder="State Code (e.g. GJ)"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, state: e.target.value })
            }
            required
          />

          <input
            placeholder="Government Master Key"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, masterKey: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <Button className="w-full">
            Verify & Register
          </Button>
        </form>
      </div>
    </div>
  );
}
