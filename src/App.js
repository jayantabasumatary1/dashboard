import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import EmployeeLogin from "./routes/EmployeeLogin";
import Hr from "./routes/Hr";
import Employee from "./components/emp/Employee";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Employee/>} />
        <Route path='/contact' element={<Hr />} />
        <Route path='/login' element={<Login />} />
        <Route path="/employee" element={<EmployeeLogin />} />
        <Route path="/hr" element={<Hr/>} />
      </Routes>
    </>
  );
}

export default App;
