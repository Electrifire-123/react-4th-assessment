import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./store/Details";
import AddStudents from "./components/AddStudents";
import EditStudentDetails from "./components/EditStudentDetails";
import "./App.css";

function App() {
  return (
    <Details>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/student" element={<Student />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/add-student" element={<AddStudents />} />

            <Route
              path="/edit-student-details"
              element={<EditStudentDetails />}
            />
          </Routes>
        </BrowserRouter>
    </Details>
  );
}

export default App;
