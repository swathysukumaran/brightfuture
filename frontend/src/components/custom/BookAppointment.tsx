import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL } from "../../config/api";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { toast } from "sonner";

type Tutor = {
  _id: string;
  name: string;
  subject: string;
  bio: string;
};

export default function BookAppointment() {
  const { id } = useParams(); // tutor ID from URL
  const navigate = useNavigate();

  const [tutor, setTutor] = useState<Tutor | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTutor = async () => {
      const res = await fetch(`${API_URL}/api/tutors/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      setTutor(data);
    };
    fetchTutor();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        tutorId: id,
        date,
        time,
        message,
      }),
    });

    if (response.ok) {
      toast.success("Appointment booked!");
      navigate("/appointments");
    } else {
      toast.error("Failed to book appointment.");
    }
  };
  if (!tutor) return <p className="p-6">Loading tutor details...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">
        Book Appointment with {tutor.name}
      </h2>
      <p className="text-sm text-gray-600 mb-6">Subject: {tutor.subject}</p>
      <p className="text-sm text-gray-500 mb-6">{tutor.bio}</p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block text-sm mb-1">Date</label>
          <Input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Time</label>
          <Input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message (optional)</label>
          <Textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. I need help with algebra homework"
          />
        </div>

        <Button type="submit" className="w-full">
          Confirm Booking
        </Button>
      </form>
    </div>
  );
}
