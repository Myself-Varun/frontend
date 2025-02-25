import { useState } from "react";
import "../stylesheets/faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is your refund policy?", answer: "Our refund policy allows returns within 30 days." },
    { question: "How do I contact support?", answer: "You can contact support via email at support@example.com." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with standard rates." },
    { question: "How can I track my order?", answer: "You'll receive a tracking link via email after your purchase." },
    { question: "Can I change my order after placing it?", answer: "Order modifications are allowed within 24 hours of purchase." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and Apple Pay." },
    { question: "Is there a warranty on your products?", answer: "Yes, all products come with a one-year warranty." },
    { question: "Do you offer bulk discounts?", answer: "Yes, we offer discounts for bulk orders. Contact sales for details." }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="text">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our services.</p>
        <button className="btn">Contact Support</button>
      </div>
      <div className="qna-wrapper">
        <div className="qna-column">
          {faqs.slice(0, 4).map((faq, index) => (
            <div key={index} className="qna" onClick={() => toggleFaq(index)}>
              <div className="question">{faq.question}</div>
              {openIndex === index && <div className="answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className="qna-column">
          {faqs.slice(4).map((faq, index) => (
            <div key={index + 4} className="qna" onClick={() => toggleFaq(index + 4)}>
              <div className="question">{faq.question}</div>
              {openIndex === index + 4 && <div className="answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}