"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFormPanel() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError(null);

  const form = e.currentTarget; // 👈 capture early
  const formData = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Something went wrong");
    }

    setSuccess(true);
    form.reset(); // ✅ SAFE
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}


  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-10 shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-8">
        Send Us a Message
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Full Name" placeholder="John Smith" name="name" />
        <Field
          label="Email Address"
          placeholder="john@company.com"
          name="email"
          type="email"
        />
        <Field label="Company" placeholder="Your Company" name="company" />
        <Field label="Subject" placeholder="General Inquiry" name="subject" />
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium">Message</label>
        <textarea
          name="message"
          required
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className="mt-2 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* FEEDBACK */}
      {success && (
        <p className="mt-4 text-sm text-green-600">
          Message sent successfully. We’ll get back to you shortly.
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium
        hover:bg-blue-700 transition
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send size={18} />
      </button>
    </motion.form>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        required
        className="mt-2 w-full rounded-xl border px-4 py-3
        focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
