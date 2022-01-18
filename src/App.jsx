import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { RequestForm } from "./pages/requestForm";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<RequestForm />} path="/form" exact />
          <Route element={<Login />} path="/login" exact />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
