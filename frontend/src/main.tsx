import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Header from "./components/custom/Header.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import Register from "./components/custom/Register.tsx";
import Login from "./components/custom/Login.tsx";
import Onboarding from "./components/custom/Onboarding.tsx";
import LandingPage from "./components/custom/LandingPage.tsx";

import StudentDashboard from "./components/custom/StudentDashboard.tsx";
import HomePage from "./components/custom/HomePage.tsx";
import StudentAppointments from "./components/custom/StudentAppointments.tsx";

// Create a layout component that conditionally renders Header
const RootLayout = () => {
  const location = useLocation();

  // List of paths where Header should not be shown
  const noHeaderPaths = ["/login", "/", "/register", "/landing"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "/browse",
        element: <StudentDashboard />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },

      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/appointments",
        element: <StudentAppointments />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1075418359786-c91d8abaaaspc4dmkta33uo4chjcgbuo.apps.googleusercontent.com">
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
