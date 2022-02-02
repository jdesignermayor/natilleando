import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./contexts/auth";
import { Provider, useDispatch } from "react-redux";
import store from "./store";

import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/Home";
import { RequestForm } from "./pages/submision/RequestForm";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NotFound } from "./pages/404/NotFound";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<RequestForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
