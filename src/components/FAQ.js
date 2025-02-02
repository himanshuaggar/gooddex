import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { GoPlus, } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can GoodDex help streamline my recruitment process?",
      answer:
        "GoodDex provides AI-powered tools and structured interviews to help you make better hiring decisions faster and more efficiently.",
    },
    {
      question: "Is the candidate information on GoodDex up-to-date?",
      answer:
        "Yes, our platform continuously updates candidate information and verifies their availability status.",
    },
    {
      question: "How do I access candidates contact information?",
      answer:
        "Once you're registered, you can directly access verified contact information for candidates that match your requirements.",
    },
    {
      question: "What types of support does GoodDex offer to recruiters?",
      answer:
        "We offer 24/7 customer support, recruitment strategy consulting, and regular platform training sessions.",
    },
    {
      question: "Is GoodDex suitable for all industries and job levels?",
      answer:
        "Yes, GoodDex caters to various industries and all job levels, from entry-level positions to executive roles.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 >
          Frequently <br />
          <span>Asked</span> <br />
          Questions
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <hr style={{ width:'100%' ,color:'#3770FF'}} />
              <div className="faq-question">
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <HiMinus className="icon" />
                ) : (
                  <GoPlus className="icon" />
                )}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
