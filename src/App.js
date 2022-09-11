import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import EmployeeLogin from "./routes/EmployeeLogin";
import ReqruiterLogin from "./routes/ReqruiterLogin";
import Hr from "./routes/Hr";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path="/employee" element={<EmployeeLogin />} />
        <Route path="/reqruiter" element={<ReqruiterLogin />} />
        <Route path="/hr" element={<Hr/>} />
      </Routes>
    </>
  );
}

export default App;
