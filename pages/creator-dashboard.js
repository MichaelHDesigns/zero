import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

function CreatorDashboard() {
  return (
    <div className="p-0 px-8">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default CreatorDashboard;
