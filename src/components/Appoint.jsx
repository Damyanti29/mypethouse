import React, { useState } from "react";
import "./Appoint.css";

const Appoint = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    // If selected date is today, validate time
    if (formData.date === today) {
      const now = new Date();
      const [hour, minute] = formData.time.split(":").map(Number);
      const selectedTime = new Date();
      selectedTime.setHours(hour, minute, 0);

      if (selectedTime < now) {
        alert("⚠ Please select a future time.");
        return;
      }
    }

    // format message for WhatsApp
    const message = `Hii, this is ${formData.name}. 
I want to book an appointment for *${formData.service}* 
on *${formData.date}* at *${formData.time}*.`.trim();

    const phone = "919969208849"; // your number
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Grooming">Grooming</option>
          <option value="Bath & Spa">Bath & Spa</option>
          <option value="Haircut">Haircut</option>
          <option value="Nail Trimming">Nail Trimming</option>
        </select>

        {/* ✅ Prevent past dates */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default Appoint;
