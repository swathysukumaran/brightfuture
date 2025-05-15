import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";
type Tutor = {
  _id: string;
  name: string;
  subject: string;
  bio: string;
};
export default function TutorListing() {
  const [tutors, setTutors] = useState<Tutor[]>([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch(`${API_URL}/api/tutors`, {
          credentials: "include",
        });
        const data = await res.json();
        setTutors(data);
        console.log("Tutors fetched successfully", data);
      } catch (err) {
        console.error("Error fetching tutors", err);
      }
    };

    fetchTutors();
  }, []);
  return <></>;
}
