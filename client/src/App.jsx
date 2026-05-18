import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateResume from "../pages/CreateResume";
import { Toaster } from "react-hot-toast";
import SelectTemplate from "../pages/SelectTemplate";
import CreateDocument from "../pages/CreateDocument"; 
import SelectDocumentTemplate from "../pages/SelectDocument";
import About from '../pages/About'
import Contact from '../pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/select-template" element={<SelectTemplate />} />

        <Route path="/create-resume" element={<CreateResume />} />
        <Route path="/create-resume/:id" element={<CreateResume />} />

        <Route path="/edit-resume/:id" element={<CreateResume />} />
        <Route
  path='/select-document-template'
  element={<SelectDocumentTemplate />}
/>
        <Route path="/create-document" element={<CreateDocument />} />

        <Route path="/create-document/:id" element={<CreateDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
