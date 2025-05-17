import { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import { API_URL } from "@/config/api";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    const success = await logout();
    if (success) {
      toast.success("Logged out");
      navigate("/");
    } else {
      toast.error("Logout failed. Please try again.");
    }
  };

  const navLinks = (
    <>
      <NavLink
        to="/tutors"
        className={({ isActive }) =>
          isActive
            ? "text-primary-button font-semibold"
            : "hover:text-primary-button"
        }
      >
        Browse Tutors
      </NavLink>
      <NavLink
        to="/appointments"
        className={({ isActive }) =>
          isActive
            ? "text-primary-button font-semibold"
            : "hover:text-primary-button"
        }
      >
        View Appointments
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? "text-primary-button font-semibold" : "hover:underline"
        }
      >
        Contact Us
      </NavLink>
      <Button
        variant="outline"
        className="text-primary hover:underline px-6 font-medium"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary-bg shadow">
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/dashboard")}
            className="h-12 sm:h-14 cursor-pointer"
          />
          <h1 className="text-xl sm:text-2xl font-semibold text-primary">
            Bright Futures Tutoring
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-primary">
          {navLinks}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-medium text-primary">
          {navLinks}
        </div>
      )}
    </header>
  );
}
