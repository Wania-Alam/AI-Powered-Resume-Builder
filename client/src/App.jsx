import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateResume from "../pages/CreateResume";
import { Toaster } from "react-hot-toast";
import SelectTemplate from '../pages/SelectTemplate'

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/select-template" element={<SelectTemplate />} />

        <Route path="/create-resume" element={<CreateResume />} />

        <Route path="/edit-resume/:id" element={<CreateResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
