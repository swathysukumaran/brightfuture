import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  role: "student" | "guardian";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  school: string;
  grade: string;
  agreePolicy: boolean;
  receiveUpdates: boolean;
}

export default function AdmissionsForm() {
  const [formData, setFormData] = useState<FormData>({
    role: "student",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Canada",
    school: "",
    grade: "",
    agreePolicy: false,
    receiveUpdates: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-secondary-button p-6 rounded-lg max-w-lg mx-auto my-16 text-white">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Speak To An Admissions Advisor Today
      </h2>
      <p className="text-center mb-4">
        Interested in learning more about CGA's online high school? Please
        complete the form below to speak with one of our Admissions Advisors.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "student" })}
            className={`px-4 py-2 border rounded ${
              formData.role === "student"
                ? "bg-white text-secondary-button"
                : "bg-transparent border-white"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "guardian" })}
            className={`px-4 py-2 border rounded ${
              formData.role === "guardian"
                ? "bg-white text-red-800"
                : "bg-transparent border-white"
            }`}
          >
            Guardian
          </button>
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
          required
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
        >
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>

        <input
          type="text"
          name="school"
          placeholder="Current School"
          value={formData.school}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
        />
        <input
          type="text"
          name="grade"
          placeholder="Current Grade/Year Level"
          value={formData.grade}
          onChange={handleChange}
          className="w-full p-2 text-black rounded"
        />

        <label className="block">
          <input
            type="checkbox"
            name="agreePolicy"
            checked={formData.agreePolicy}
            onChange={handleChange}
            className="mr-2"
            required
          />
          I agree to the{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            className="mr-2"
          />
          I want to receive study pathways, free resources, and guidance.
        </label>

        <button
          type="submit"
          className="w-full py-2 bg-white hover:bg-secondary font-semibold rounded text-secondary-button transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
