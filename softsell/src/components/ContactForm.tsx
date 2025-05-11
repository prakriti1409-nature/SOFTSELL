'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.license || !form.message) {
      alert('Please fill in all required fields!');
      return;
    }
    alert('Form submitted (dummy)');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-4">
        <input name="name" placeholder="Name *" value={form.name} onChange={handleChange} className="w-full p-3 rounded border" />
        <input name="email" placeholder="Email *" type="email" value={form.email} onChange={handleChange} className="w-full p-3 rounded border" />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="w-full p-3 rounded border" />
        <select name="license" value={form.license} onChange={handleChange} className="w-full p-3 rounded border">
          <option value="">Select License Type *</option>
          <option>Windows</option>
          <option>Adobe</option>
          <option>Autodesk</option>
          <option>Other</option>
        </select>
        <textarea name="message" placeholder="Message *" value={form.message} onChange={handleChange} className="w-full p-3 rounded border h-32" />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Submit</button>
      </form>
    </section>
  );
}
