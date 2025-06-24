import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Journey, exactly?",
    answer:
      "Journey is a lightweight storytelling tool that helps B2B teams deliver follow-ups, onboarding flows, and proposals in a single, branded link.",
  },
  {
    question: "How is this different from Notion, Loom, or Google Docs?",
    answer:
      "No. Journey is designed to work with what you already have—PDFs, videos, decks, case studies—and make it easier to deliver them together.",
  },
  {
    question: "Do I need to create new content to use Journey?",
    answer:
      "No. Journey is designed to work with what you already have—PDFs, videos, decks, case studies—and make it easier to deliver them together.",
  },
  {
    question: "Does my buyer or client need to log in to see it?",
    answer:
      "Nope. They just click the link and view. No login, no friction.",
  },
  {
    question: "Can I see how buyers interact with my content?",
    answer:
      "Yes. Journey tracks time on page, scroll activity, clicks, and more—so you know what’s resonating and when to follow up.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="mb-4">
        <span className="inline-block bg-black text-white text-sm font-medium px-4 py-1 rounded-full">
          Journey FAQ
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg px-6 py-4 cursor-pointer transition-shadow hover:shadow"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              <span className="text-xl text-gray-600 font-bold">
                {openIndex === index ? "×" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
