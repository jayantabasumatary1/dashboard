import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Hr from "./routes/Hr";
import Emp from "./routes/Emp";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Employee' element={<Emp/>} />
        <Route path='/Recruiter' element={<Hr />} />
      </Routes>
    </>
  );
}

export default App;
