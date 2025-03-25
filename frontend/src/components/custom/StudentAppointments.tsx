import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL } from "@/config/api";

interface Appointment {
  id: number;
  tutorId: number;
  start: Date;
  end: Date;
  title: string;
}

const StudentAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const studentId = 1; // Replace with the actual student ID

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
      } catch (error) {
        console.error("Error fetching student appointments:", error);
      }
    };

    fetchStudentAppointments();
  }, [studentId]);

  return (
    <div className="p-4 font-roboto text-text-color bg-primary-bg min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center font-lora">
        My Appointments
      </h2>

      {appointments.length > 0 ? (
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Start</th>
              <th className="px-4 py-2">End</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="px-4 py-2">{appointment.title}</td>
                <td className="px-4 py-2">
                  {moment(appointment.start).format("MMMM Do YYYY, h:mm a")}
                </td>
                <td className="px-4 py-2">
                  {moment(appointment.end).format("MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default StudentAppointments;
