import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./contexts/auth";
import { Provider } from "react-redux";
import store from "./store";

import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { RequestForm } from "./pages/RequestForm";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
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
