import { Button } from "../ui/button";
import { BookOpen, Clock, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coverimage from "../../assets/cover.jpg";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <h2 className="text-2xl font-bold text-primary">Bright Futures</h2>
        <div className="space-x-4">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button className="text-white" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 bg-blue-50 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={coverimage} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">
            Your Bright Future Starts Here
          </h2>
          <p className="text-lg mb-6 max-w-xl">
            Book the right tutor in minutes. Learn on your schedule with the
            help you need.
          </p>
          <Button size="lg" onClick={() => navigate("/tutors")}>
            Find Tutors
          </Button>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16 bg-white">
        <FeatureCard
          icon={<BookOpen className="w-10 h-10 text-blue-500" />}
          title="Skilled Tutors"
          description="Find qualified tutors across a wide range of subjects."
        />
        <FeatureCard
          icon={<Clock className="w-10 h-10 text-yellow-500" />}
          title="Flexible Scheduling"
          description="Book sessions at times that work best for you."
        />
        <FeatureCard
          icon={<MessageSquare className="w-10 h-10 text-green-500" />}
          title="1-on-1 Support"
          description="Personalized help to improve your learning outcomes."
        />
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-100">
        <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
        <Button size="lg" onClick={() => navigate("/register")}>
          Create Your Account
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center py-6 border-t bg-white">
        © {new Date().getFullYear()} Bright Futures. All rights reserved.
      </footer>
    </div>
  );
}
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl shadow hover:shadow-md transition-all bg-gray-50">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
export default LandingPage;
