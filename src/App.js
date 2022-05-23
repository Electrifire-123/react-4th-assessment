import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
