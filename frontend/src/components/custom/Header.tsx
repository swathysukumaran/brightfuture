import React from "react";
import logo from "../../assets/logo.jpeg";
import { Button } from "../ui/button";
import { API_URL } from "@/config/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      return response.ok;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-4 bg-secondary-bg flex justify-between items-center">
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/home")} // Navigate to Browse Tutors
        className="w-auto h-12 sm:h-16 md:h-20 cursor-pointer"
      />
      <div className="flex items-center gap-4">
        <Link
          to="/browse"
          className="flex items-center gap-2 hover:text-primary-button"
        >
          Browse Tutors
        </Link>
        <Link
          to="/appointments"
          className="flex text-primary items-center gap-2 hover:text-primary-button"
        >
          View Appointments
        </Link>
        <Button
          variant="ghost"
          className="bg-secondary-button text-white hover:bg-primary-button"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
