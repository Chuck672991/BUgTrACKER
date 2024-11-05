import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/Login";
import User from "./UserPage/User";
import BugTracker from "./BugPage/BugTracker";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/tracking" element={<BugTracker />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
