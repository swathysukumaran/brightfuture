import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/api";
import { toast } from "sonner";

// Interface for processed appointments with proper Date objects
interface Appointment {
  _id: string;
  tutorId: { name: string };
  start: Date;
  end: Date;
  title: string;
}

const StudentAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentAppointments = async () => {
      try {
        const response = await fetch(`${API_URL}/api/appointments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();

        setAppointments(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed to load appointments");
      }
      setLoading(false);
    };

    fetchStudentAppointments();
  }, []);

  if (loading) {
    return <p className="text-xl">Loading....</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-600">You have no upcoming appointments.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-xl">
            <thead>
              <tr className="bg-muted text-left text-sm text-gray-700">
                <th className="py-3 px-4">Tutor</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Title</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => {
                const start = new Date(appt.start);
                const end = new Date(appt.end);
                const date = start.toLocaleDateString();
                const time = `${start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })} - ${end.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`;

                return (
                  <tr
                    key={appt._id}
                    className="border-t hover:bg-gray-50 text-sm"
                  >
                    <td className="py-3 px-4">{appt.tutorId.name || "—"}</td>
                    <td className="py-3 px-4">{date}</td>
                    <td className="py-3 px-4">{time}</td>
                    <td className="py-3 px-4">{appt.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentAppointments;
