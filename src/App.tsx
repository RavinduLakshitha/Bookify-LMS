import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUS from "./components/contactUs/ContactUs";
import Dashboard from "./components/dashboard/DashBoard";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import { Navigate } from "react-router-dom";

// PrivateRoute Component
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </Router>
  );
};

export default App;
