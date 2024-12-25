import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookConsultant.css";

const BookConsultant = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultation: "",
    datetime: "",
    notes: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state to manage submission process

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator

    try {
      const response = await fetch("https://server-zeta-steel.vercel.app/api/book-consultant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessage(result.message || "Congratulations! Your consultation has been booked.");
      setFormData({ name: "", email: "", phone: "", consultation: "", datetime: "", notes: "" }); // Reset form
      console.log("Form Data Submitted:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(`Error submitting form: ${error.message}`);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <section className="booking-form">
      <h2>Book Your Consultation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Consultation Duration:</label>
          <div>
            <input
              type="radio"
              id="option1"
              name="consultation"
              value="599"
              checked={formData.consultation === "599"}
              onChange={handleChange}
              required
            />
            <label htmlFor="option1">₹599 for 30 mins</label>
          </div>
          <div>
            <input
              type="radio"
              id="option2"
              name="consultation"
              value="999"
              checked={formData.consultation === "999"}
              onChange={handleChange}
            />
            <label htmlFor="option2">₹999 for 60 mins</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="datetime">Preferred Date & Time:</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Additional Notes (Optional):</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </section>
  );
};

export default BookConsultant;
