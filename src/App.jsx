import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Risk from "./pages/Risk";
import AIIMS from "./pages/AIIMS";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">

        <nav className="flex justify-center gap-6 p-4 bg-gray-900">
          <Link to="/">Dashboard</Link>
          <Link to="/risk">Risk</Link>
          <Link to="/aiims">AIIMS</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/aiims" element={<AIIMS />} />
        </Routes>

      </div>
    </Router>
  );
}