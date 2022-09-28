import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Hr from "./routes/Hr";
import Employee from "./components/emp/Employee";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Employee/>} />
        <Route path='/contact' element={<Hr />} />
      </Routes>
    </>
  );
}

export default App;
