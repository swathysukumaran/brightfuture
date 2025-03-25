import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { API_URL } from "@/config/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import emilyCarter from "../../assets/emily-carter.jpg";
import jonathanReid from "../../assets/jonathan-reid.jpg";
import samanthaLopez from "../../assets/samantha-lopez.jpg";
import davidThompson from "../../assets/david-thompson.jpg";
import rachelKim from "../../assets/rachel-kim.jpg";
import marcusPatel from "../../assets/marcus-patel.jpg";

interface Tutor {
  _id: number;
  name: string;
  title: string;
  education: string;
  experience: string;
  bio: string;
  subjects: string[];
  availability: { start: string; end: string }[];
  profilePicture: string;
}

interface Appointment {
  id: number;
  tutorId: number;
  start: Date;
  end: Date;
  title: string;
}

const localizer = momentLocalizer(moment);

const StudentDashboard: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [newAppointment, setNewAppointment] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const studentId = 1;

  const imageMap: { [key: string]: string } = {
    "Emily Carter": emilyCarter,
    "Jonathan Reid": jonathanReid,
    "Samantha Lopez": samanthaLopez,
    "David Thompson": davidThompson,
    "Rachel Kim": rachelKim,
    "Marcus Patel": marcusPatel,
  };
  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };
    handleBodyScroll();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  useEffect(() => {
    const fetchTutorsAndAppointments = async () => {
      try {
        const response = await fetch(`${API_URL}/api/tutors`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setTutors(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }

      try {
        const appointmentResponse = await fetch(`${API_URL}/api/appointments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const appointmentData = await appointmentResponse.json();
        setAppointments(appointmentData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchTutorsAndAppointments();
  }, [studentId]);

  const handleTutorClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const handleSlotSelect = ({ start, end }: { start: Date; end: Date }) => {
    if (selectedTutor) {
      setNewAppointment({ start, end });
    } else {
      alert("Please select a tutor first");
    }
  };

  const handleBookAppointment = () => {
    if (newAppointment && selectedTutor) {
      const appointment: Omit<Appointment, "id"> = {
        tutorId: selectedTutor._id,
        start: newAppointment.start,
        end: newAppointment.end,
        title: `Appointment with ${selectedTutor.name}`,
      };

      fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(appointment),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData) => {
              console.error("Backend error response:", errorData);
              throw errorData;
            });
          }
          return response.json();
        })
        .then((data) => {
          setAppointments([...appointments, data]);
          setNewAppointment(null);
          alert("Appointment Booked");
          setIsModalOpen(false);
        })
        .catch((error) => console.error("Error booking appointment:", error));
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="p-4 font-roboto text-text-color bg-primary-bg min-h-screen">
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-center font-lora">
          Student Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => handleTutorClick(tutor)}
            >
              <img
                src={imageMap[tutor.name]}
                alt={tutor.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{tutor.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{tutor.title}</p>
              <p className="text-xs text-gray-500">
                {tutor.bio.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white z-[100] w-full max-w-2xl p-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-95">
          {selectedTutor && (
            <div>
              <DialogHeader>
                <DialogTitle>{selectedTutor.name}</DialogTitle>
                <DialogDescription>{selectedTutor.bio}</DialogDescription>
              </DialogHeader>
              <img
                src={imageMap[selectedTutor.name]}
                alt={selectedTutor.name}
                className=" h-40 rounded-md mb-2 items-center justify-center mx-auto"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-4">Book Appointment</h3>
                <div className="mb-4" style={{ height: 500 }}>
                  <Calendar
                    localizer={localizer}
                    events={appointments.filter(
                      (app) => app.tutorId === selectedTutor._id
                    )}
                    startAccessor="start"
                    endAccessor="end"
                    selectable={true}
                    onSelectSlot={handleSlotSelect}
                  />
                </div>
                {newAppointment && (
                  <div className="mt-4">
                    <p className="text-gray-600 mb-2">
                      Selected Time:{" "}
                      {moment(newAppointment.start).format(
                        "MMMM Do पुरालेखित, h:mm a"
                      )}{" "}
                      - {moment(newAppointment.end).format("h:mm a")}
                    </p>
                    <button
                      onClick={handleBookAppointment}
                      className="bg-secondary-button hover:bg-primary-button text-white font-semibold py-2 px-4 rounded-md transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentDashboard;
