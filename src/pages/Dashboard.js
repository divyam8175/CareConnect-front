import React from "react";
import Button from "../components/ui/Button"; 
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import { FaPhone, FaEnvelope, FaUserMd, FaHeartbeat, FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import dashboardImage from "../assets/dashboard.png"; // Adjust the path as needed
const Dashboard = () => {
  return (<>
    <div className="main">
      <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
      <div className="dashboard-links">
        <Link to="/login" className="login-link">LOGIN</Link>
        <Link to="/signup" className="login-link">SIGNUP</Link>
      </div>
      </div>
       {/* Navbar
       <header className="bg-teal-600 text-white p-4 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold">LIFE LINE HOSPITAL</div>
        <div className="hidden md:flex gap-4">
          <span className="flex items-center gap-2"><FaPhone /> +91 5001444122</span>
          <span className="flex items-center gap-2"><FaEnvelope /> dummy@example.com</span>
        </div>
        <Button className="bg-white text-teal-600 px-4 py-2 rounded-md">Log In / Sign Up</Button>
      </header> */}

      {/* Hero Section */}
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Total Health Care Solution</h1>
        <p className="text-gray-600 mt-2">Providing the best medical care for you.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-teal-600 text-white px-6 py-3">Read More</Button>
          <Button className="bg-gray-200 text-gray-800 px-6 py-3">Purchase</Button>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        <Card className="border-teal-400">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaUserMd className="text-teal-600 text-4xl" />
            <h2 className="text-xl font-semibold mt-4">Heart Surgery</h2>
            <p className="text-gray-600">Expert cardiac care with advanced technology.</p>
          </CardContent>
        </Card>
        <Card className="border-yellow-400">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaHeartbeat className="text-yellow-600 text-4xl" />
            <h2 className="text-xl font-semibold mt-4">Emergency Care</h2>
            <p className="text-gray-600">24/7 emergency services with rapid response.</p>
          </CardContent>
        </Card>
        <Card className="border-green-400">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaTooth className="text-green-600 text-4xl" />
            <h2 className="text-xl font-semibold mt-4">Dental Care</h2>
            <p className="text-gray-600">Comprehensive dental treatments for all ages.</p>
          </CardContent>
        </Card>
      </section>
      </>
  );
};

export default Dashboard;
