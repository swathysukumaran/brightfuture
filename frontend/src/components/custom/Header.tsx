import React from "react";
import logo from "../../assets/logo.png";
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
    <div className=" bg-primary-bg  flex flex-col gap-1 justify-between w-full">
      <div className="flex items-left bg-secondary-bg w-full py-4 px-2">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/home")} // Navigate to Browse Tutors
          className="w-auto h-12 sm:h-16 md:h-20 cursor-pointer"
        />
        <header className="p-4 text-center font-lora text-3xl font-semibold">
          Bright Futures Tutoring
        </header>
      </div>

      <div className="flex gap-16 p-2  bg-secondary-bg justify-end w-full">
        <Link
          to="/tutors"
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
        <Link
          to="/contacts"
          className="flex text-primary items-center gap-2 hover:text-primary-button"
        >
          Contact us
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
