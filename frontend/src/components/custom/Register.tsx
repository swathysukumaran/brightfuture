import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add validation and backend call
    console.log("Submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full mt-4">
            Create Account
          </Button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            className="text-primary underline"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
