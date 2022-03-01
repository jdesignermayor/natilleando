import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

import store from "./store";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { RequestForm } from "./pages/submision/RequestForm";
import { SignUp } from "./pages/sign-up/SignUp";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NotFound } from "./pages/404/NotFound";

const theme = createTheme({
  palette: {
    primary: {
      main: "#166534",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/form" element={<RequestForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
