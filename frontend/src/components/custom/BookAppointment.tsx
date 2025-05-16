import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL } from "../../config/api";

type Tutor = {
  _id: string;
  name: string;
  subject: string;
  bio: string;
};

export default function BookAppointment() {
  const { id } = useParams(); // tutor ID from URL

  const [tutor, setTutor] = useState<Tutor | null>(null);
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [message, setMessage] = useState("");

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

  if (!tutor) return <p className="p-6">Loading tutor details...</p>;

  return (
    <div className="max-w-xl mx-auto px-4 py-10 bg-muted min-h-screen"></div>
  );
}
