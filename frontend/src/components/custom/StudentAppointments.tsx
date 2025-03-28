import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL } from "@/config/api";

// Interface for data from API
interface AppointmentResponse {
  _id: string;
  tutorId: string;
  studentId: string;
  start: string; // API returns dates as strings
  end: string;
  title: string;
  __v: number;
}

// Interface for processed appointments with proper Date objects
interface Appointment {
  _id: string;
  tutorId: string;
  studentId: string;
  start: Date;
  end: Date;
  title: string;
}

const StudentAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

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
        const data = (await response.json()) as AppointmentResponse[];

        // Convert string dates to Date objects
        const formattedAppointments = data.map(
          (appointment: AppointmentResponse) => ({
            ...appointment,
            start: new Date(appointment.start),
            end: new Date(appointment.end),
          })
        );

        setAppointments(formattedAppointments);
      } catch (error) {
        console.error("Error fetching student appointments:", error);
      }
    };

    fetchStudentAppointments();
  }, []);

  return (
    <div className="p-4 font-roboto text-text-color bg-primary-bg min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center font-lora">
        My Appointments
      </h2>

      {appointments.length > 0 ? (
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 rounded-tl-lg">Title</th>
              <th className="px-4 py-2">Start</th>
              <th className="px-4 py-2 rounded-tr-lg">End</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{appointment.title}</td>
                <td className="px-4 py-3">
                  {moment(appointment.start).format("MMMM Do YYYY, h:mm a")}
                </td>
                <td className="px-4 py-3">
                  {moment(appointment.end).format("MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center p-10 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-lg text-gray-600">No appointments booked yet.</p>
          <p className="mt-2 text-primary-600">
            Book a session with one of our tutors to get started!
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentAppointments;
