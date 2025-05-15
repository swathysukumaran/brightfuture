import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
type Tutor = {
  _id: string;
  name: string;
  subject: string;
  bio: string;
};
export default function TutorListing() {
  const navigate = useNavigate();
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
  return (
    <div className="min-h-screen bg-muted px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          Available Tutors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.length === 0 ? (
            <p>No tutors found.</p>
          ) : (
            tutors.map((tutor) => (
              <Card key={tutor._id} className="bg-white shadow rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{tutor.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tutor.subject}</p>
                  <p className="text-sm text-gray-500 mb-4">{tutor.bio}</p>
                  <Button
                    onClick={() => navigate(`/book/${tutor._id}`)}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
