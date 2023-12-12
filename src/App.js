import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />

          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
