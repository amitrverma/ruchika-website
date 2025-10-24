"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brandDark mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-brandAccent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brandDark mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-brandAccent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brandDark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-brandAccent resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#c0654f] text-white font-medium tracking-wide px-6 py-3 rounded-md hover:bg-brandDark transition-colors"
      >
        SEND MESSAGE
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center font-medium mt-2">
          Thanks for reaching out! I’ll get back to you soon.
        </p>
      )}
    </form>
  );
}
