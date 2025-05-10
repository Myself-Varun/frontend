import { useState } from "react";
import "../stylesheets/faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How can I subscribe to StreamSphere?", answer: "You can subscribe by creating an account and selecting a plan from our pricing page." },
    { question: "What devices can I stream on?", answer: "StreamSphere supports streaming on mobile, tablet, desktop, and smart TVs." },
    { question: "Can I download videos for offline viewing?", answer: "Yes, premium users can download videos to watch offline." },
    { question: "Is there a free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
    { question: "How many devices can be logged in at once?", answer: "Depending on your plan, you can stream on up to 4 devices simultaneously." },
    { question: "Do you offer content in regional languages?", answer: "Yes, we offer content in multiple Indian regional languages with subtitles." },
    { question: "Can I host a watch party with friends?", answer: "Yes, our platform supports real-time watch parties with synced playback." },
    { question: "How do I cancel my subscription?", answer: "You can cancel anytime through your account settings without any extra charges." }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="text">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about using StreamSphere.</p>
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
