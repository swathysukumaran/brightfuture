import React, { useState } from "react";

// Image Imports (Replace with your actual image paths)
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import testimonial4 from "../../assets/testimonial4.png";
import testimonial5 from "../../assets/testimonal5.png";
import heroImage from "../../assets/hero-image.png"; // Import your hero image
import studentteacher from "../../assets/studentteacher.jpg"; // Import your student-teacher image
import { Link } from "react-router-dom";
const testimonials = [
  {
    img: testimonial1,
    text: "Bright Futures Tutoring helped my son improve his math grades significantly!",
    author: "Jane D.",
  },
  {
    img: testimonial3,
    text: "The tutors are patient and knowledgeable. Highly recommend!",
    author: "Michael S.",
  },
  {
    img: testimonial2,
    text: "My daughter's confidence has soared since she started tutoring.",
    author: "Emily R.",
  },
  {
    img: testimonial4,
    text: "Amazing experience! My child now enjoys learning.",
    author: "Sarah K.",
  },
  {
    img: testimonial5,
    text: "Highly professional tutors who truly care about students.",
    author: "David L.",
  },
];
const HomePage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  return (
    <div className="font-roboto text-text-color min-h-screen bg-primary-bg px-20">
      {/* Header (You can add navigation here) */}

      {/* Hero Section */}
      <section className="relative mt-1">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-[80vh] object-cover" // Adjust height as needed
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center p-4  bg-opacity-50">
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
      <section>
        <h2 className="font-lora text-3xl font-semibold mb-4 text-center">
          About Us
        </h2>
        <div className="flex gap-2">
          <div className="w-1/2">
            <p className="mb-4">
              At Bright Futures Tutoring, we believe that every student has the
              potential to succeed with the right support and guidance. Our
              mission is to empower K-12 students with the knowledge, skills,
              and confidence they need to excel in their studies and beyond.
            </p>
            <p className="mb-4">
              We offer personalized tutoring services, both online and
              in-person, tailored to meet each student’s unique learning needs.
              Whether a student is looking to master foundational skills, tackle
              advanced coursework, or prepare for exams, our experienced tutors
              provide targeted instruction that makes learning engaging and
              effective.
            </p>
            <p className="mb-4">
              Our team consists of highly qualified educators with expertise in
              a variety of subjects, from elementary literacy and math to high
              school science, English, and test preparation. We take a
              student-centered approach, adapting our teaching methods to suit
              different learning styles and academic goals.
            </p>
            <p className="mb-4">
              At Bright Futures Tutoring, we foster a supportive and encouraging
              learning environment where students feel motivated to overcome
              challenges and achieve their full potential. Whether it’s
              strengthening fundamental concepts, improving study habits, or
              boosting confidence in a subject, we are committed to helping
              students succeed.
            </p>
            <p className="mb-4">
              Because when students believe in themselves, their futures shine
              bright.
            </p>
            <p>
              Let’s build a brighter future together! Contact us today to learn
              how we can support your child’s academic journey.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={studentteacher}
              alt="Student and Teacher"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-bg z-[60] py-6">
        <h2 className="font-lora text-3xl font-semibold mb-4 text-center">
          Testimonials
        </h2>
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full bg-white px-4 py-8 rounded-lg shadow-md text-center flex gap-8 items-center justify-center"
              >
                <img
                  src={testimonial.img}
                  alt={`Testimonial ${index + 1}`}
                  className="w-20 h-20 rounded-full mb-2"
                />
                <div>
                  <p className="mb-2">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Footer (You can add contact information here) */}
      <footer className="bg-primary-button text-white p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: contact@brightfutures.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Learning Lane, Tutortown</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/browse" className="hover:underline">
                  Browse Tutors
                </a>
              </li>
              <li>
                <a href="/appointments" className="hover:underline">
                  View Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 border-t border-gray-400 pt-4">
          © {new Date().getFullYear()} Bright Futures Tutoring. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
