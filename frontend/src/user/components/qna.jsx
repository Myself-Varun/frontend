import React, { useState } from "react";
import "../stylesheets/qna.css";

const QnA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    const adminEmail = "admin@example.com"; // Replace with your admin email
    const subject = encodeURIComponent("New Inquiry from QnA Form");
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="qna-container">
      {/* Left Side - Full Width Form */}
      <div className="qna-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          {/* Terms & Button in Same Row */}
          <div className="terms-container">
            <div className="terms">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label>I accept the Terms & Conditions</label>
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>

      {/* Right Side - Two Containers */}
      <div className="qna-right">
        {/* Text Container */}
        <div className="qna-text-box">
          <h3>Need Help?</h3>
          <p>
            We are here to assist you 24/7. Drop your questions, and we'll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Background Image Container */}
        <div className="qna-image-box"></div>
      </div>
    </div>
  );
};

export default QnA;
