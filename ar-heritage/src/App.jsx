import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monuments from "./pages/Monuments";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-accent selection:text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monuments" element={<Monuments />} />
        </Routes>
      </div>
    </Router>
  );
}