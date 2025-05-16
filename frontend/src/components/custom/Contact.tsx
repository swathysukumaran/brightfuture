import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🟡 You can replace this with your backend email/feedback handler
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
      <p className="text-sm text-gray-600 mb-6">
        Got a question or need help? Send us a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Subject</label>
          <Input name="subject" value={form.subject} onChange={handleChange} />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <Textarea
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
