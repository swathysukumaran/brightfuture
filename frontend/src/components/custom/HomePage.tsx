import React from "react";

// Image Imports (Replace with your actual image paths)
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import heroImage from "../../assets/hero-image.png"; // Import your hero image
import { Link } from "react-router-dom";
const HomePage: React.FC = () => {
  return (
    <div className="font-roboto text-text-color min-h-screen bg-primary-bg">
      {/* Header (You can add navigation here) */}
      <header className="p-4 text-center font-lora text-2xl font-semibold">
        Bright Futures Tutoring
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-[80vh] object-cover" // Adjust height as needed
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black bg-opacity-50">
          <h1 className="font-lora text-4xl font-bold text-white mb-4">
            Empowering Students for Bright Futures
          </h1>
          <p className="text-white mb-8">
            Personalized tutoring for K-12 students.
          </p>
          <Link
            to="/browse"
            className="bg-secondary-button text-white px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="p-4">
        <h2 className="font-lora text-3xl font-semibold mb-4 text-center">
          About Us
        </h2>
        <p className="mb-4">
          At Bright Futures Tutoring, we believe that every student has the
          potential to succeed with the right support and guidance. Our mission
          is to empower K-12 students with the knowledge, skills, and confidence
          they need to excel in their studies and beyond.
        </p>
        <p className="mb-4">
          We offer personalized tutoring services, both online and in-person,
          tailored to meet each student’s unique learning needs. Whether a
          student is looking to master foundational skills, tackle advanced
          coursework, or prepare for exams, our experienced tutors provide
          targeted instruction that makes learning engaging and effective.
        </p>
        <p className="mb-4">
          Our team consists of highly qualified educators with expertise in a
          variety of subjects, from elementary literacy and math to high school
          science, English, and test preparation. We take a student-centered
          approach, adapting our teaching methods to suit different learning
          styles and academic goals.
        </p>
        <p className="mb-4">
          At Bright Futures Tutoring, we foster a supportive and encouraging
          learning environment where students feel motivated to overcome
          challenges and achieve their full potential. Whether it’s
          strengthening fundamental concepts, improving study habits, or
          boosting confidence in a subject, we are committed to helping students
          succeed.
        </p>
        <p className="mb-4">
          Because when students believe in themselves, their futures shine
          bright.
        </p>
        <p>
          Let’s build a brighter future together! Contact us today to learn how
          we can support your child’s academic journey.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="p-4 bg-secondary-bg z-[60]">
        <h2 className="font-lora text-3xl font-semibold mb-4 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Testimonial 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={testimonial1}
              alt="Testimonial 1"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-center mb-2">
              "Bright Futures Tutoring helped my son improve his math grades
              significantly!"
            </p>
            <p className="text-center font-semibold">- Jane D.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={testimonial2}
              alt="Testimonial 2"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-center mb-2">
              "The tutors are patient and knowledgeable. Highly recommend!"
            </p>
            <p className="text-center font-semibold">- Michael S.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={testimonial3}
              alt="Testimonial 3"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-center mb-2">
              "My daughter's confidence has soared since she started tutoring."
            </p>
            <p className="text-center font-semibold">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Footer (You can add contact information here) */}
      <footer className="p-4 text-center bg-primary-button text-white">
        © {new Date().getFullYear()} Bright Futures Tutoring
      </footer>
    </div>
  );
};

export default HomePage;
