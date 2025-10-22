"use client";

import { useState } from "react";
import { contactFormSchema } from "@/lib/validation";
import { sendEmail } from "@/lib/email";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const parsed = contactFormSchema.safeParse(form);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid input.";
      setStatus(firstError);
      return;
    }

    setLoading(true);

    const { success } = await sendEmail(parsed.data);

    if (success) {
      setStatus("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <div className="flex w-full ">
        <input
          type="text"
          name="name"
          className="border-1 border-white/50 p-2 focus:outline-none w-full"
          placeholder="Jonny Craig"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full mt-1.5">
        <input
          type="email"
          name="email"
          className="border-1 border-white/50 p-2 focus:outline-none w-full"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full mt-1.5">
        <textarea
          rows={4}
          className="border-1 border-white/50 p-2 focus:outline-none w-full resize-none"
          placeholder="Type your message here"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="border-1 border-white/50 rounded-b-xl w-full p-2 hover:bg-black/50 duration-500 transition-colors"
      >
        {loading ? (
          <span className="text-sm">Sending...</span>
        ) : (
          <span className="text-sm">Send Message</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
