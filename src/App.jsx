import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Public Pages */
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReviewHighRiskPage from "./pages/review-high-risk";


/* ASHA Worker Pages */
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
import PatientAnalysis from "./pages/PatientAnalysis";
import PatientProfileAsha from "./pages/viewProfileAsha";


/* Doctor Pages */
import DoctorLogin from "./pages/doctorLogin";
import FollowUpManagement from "./pages/Follow-up-management";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctorLogin" element={<DoctorLogin />} />

        {/* ASHA Worker */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/analysis/:aadhaar" element={<PatientAnalysis />} />
        <Route
          path="/asha/patient/:aadhaar"
          element={<PatientProfileAsha />}
        />

        <Route
  path="/review-high-risk"
  element={<ReviewHighRiskPage />}
/>


        {/* Doctor */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
         onClick={() => navigate("/doctor/follow-ups")}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
