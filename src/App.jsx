import RegistrationForm from "./pages/RegistrationForm";
import Datatable from "./datatable/Datatable";
import Chart from "./chart/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/registered-users" element={<Datatable />} />
        <Route path="/statistics" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
