import { useNavigate } from "react-router-dom";

import { CalendarDays, Users, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/api";
type Appointment = {
  _id: string;
  tutorId: { name: string };
  start: Date;
  end: string;
  title: string;
};
export default function StudentDashboard() {
  const navigate = useNavigate();
  const userName = "Swathy"; // Replace with dynamic name from context/state
  const [nextAppointment, setNextAppointment] = useState<Appointment | null>(
    null
  );
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`${API_URL}/api/appointments`, {
          credentials: "include",
        });
        const data: Appointment[] = await res.json();

        const now = new Date();

        const upcoming = data
          .map((appt) => ({ ...appt, start: new Date(appt.start) }))
          .filter((appt) => appt.start > now)
          .sort((a, b) => +a.start - +b.start);

        setNextAppointment(upcoming[0] || null);
      } catch (err) {
        console.error("Failed to fetch appointments", err);
      }
    };

    fetchAppointments();
  }, []);
  return (
    <div className="min-h-screen bg-muted px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Welcome */}
        <h2 className="text-3xl font-bold mb-2 text-primary">
          Welcome back, {userName} 👋
        </h2>
        <p className="text-gray-700 mb-8">
          Here’s what’s next on your learning journey.
        </p>

        {/* Next Appointment */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <CalendarDays className="text-blue-500" />
            Your Next Appointment
          </h3>
          {nextAppointment ? (
            <div>
              <p className="text-gray-800 font-medium">
                {nextAppointment.tutorId?.name}
              </p>
              <p className="text-gray-600 text-sm">
                {new Date(nextAppointment.start).toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {nextAppointment.title}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">
              No sessions scheduled. Book one now!
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionCard
            icon={<Users className="w-6 h-6 text-primary" />}
            title="Find a Tutor"
            onClick={() => navigate("/tutors")}
          />
          <ActionCard
            icon={<CalendarDays className="w-6 h-6 text-primary" />}
            title="My Appointments"
            onClick={() => navigate("/appointments")}
          />
          <ActionCard
            icon={<Mail className="w-6 h-6 text-primary" />}
            title="Contact Us"
            onClick={() => navigate("/contacts")}
          />
        </div>
      </div>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  onClick,
}: {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white hover:bg-gray-50 transition rounded-xl shadow p-6 flex flex-col items-center justify-center text-center"
    >
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-medium text-gray-800">{title}</h4>
    </div>
  );
}
