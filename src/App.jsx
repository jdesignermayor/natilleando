import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { RequestForm } from "./pages/requestForm";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<RequestForm />} path="/form"  />
          <Route element={<Login />} path="/login"  /> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
