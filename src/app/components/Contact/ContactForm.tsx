"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("idle");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  } finally {
    setTimeout(() => setStatus("idle"), 4000);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="group relative space-y-8 bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-brandDark/10 shadow-[0_12px_40px_-12px_rgb(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-0.5"
    >
      {/* Header */}
      <h3 className="text-2xl font-serif text-brandDark text-center mb-2">
        Send me a message
      </h3>
      <p className="text-sm text-brandDark/70 text-center mb-8">
        I’ll personally read and reply within 24–48 hours (Mon–Fri).
      </p>

      {/* Inputs */}
      <div className="space-y-6">
        {["name", "email", "message"].map((field) => (
          <div key={field} className="relative">
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                required
                value={formData[field as "name" | "email"]}
                onChange={handleChange}
                className="peer w-full border border-brandDark/20 rounded-md px-4 pt-5 pb-2.5 text-brandDark bg-white/60 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandSecondary/40 focus:border-transparent transition-all"
                placeholder={field === "name" ? "Your name" : "Your email"}
              />
            ) : (
              <textarea
                name={field}
                id={field}
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="peer w-full border border-brandDark/20 rounded-md px-4 pt-5 pb-2.5 text-brandDark bg-white/60 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandSecondary/40 focus:border-transparent resize-none transition-all"
                placeholder="Your message"
              />
            )}
            <label
              htmlFor={field}
              className="absolute left-4 top-2.5 text-sm text-brandDark/60 transition-all 
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-brandDark/40 
                        peer-focus:top-2 peer-focus:text-sm peer-focus:text-brandSecondary"
            >
              {field === "name"
                ? "Name"
                : field === "email"
                ? "Email"
                : "Message"}
            </label>
          </div>
        ))}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`group relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 ${
          status === "success"
            ? "bg-green-600"
            : status === "error"
            ? "bg-red-600"
            : "bg-brandSecondary hover:bg-brandDark"
        } ${status === "idle" ? "hover:-translate-y-0.5 shadow-md" : ""}`}
      >
        {status === "success" ? (
          <>
            <CheckCircle2 className="w-5 h-5 animate-[pop_0.4s_ease-out]" />
            Sent!
          </>
        ) : status === "error" ? (
          <>
            <AlertCircle className="w-5 h-5 animate-[shake_0.4s_ease-in-out]" />
            Try Again
          </>
        ) : (
          <>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            SEND MESSAGE
          </>
        )}
      </button>

      {/* Status message */}
      {status === "success" && (
        <p className="text-brandDark/80 bg-brandPrimary/20 border border-brandPrimary/30 rounded-lg px-4 py-3 text-center font-medium mt-4 animate-fade-in">
          Thanks for reaching out! I’ll get back to you soon ☕
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-medium mt-2 animate-fade-in">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
