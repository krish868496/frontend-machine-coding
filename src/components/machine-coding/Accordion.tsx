import { useState } from "react";
import ForwardRefParent from "./ForwardRefParent";

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library.",
  },
  {
    id: 2,
    question: "What is Next.js?",
    answer: "Next.js is a React framework.",
  },
  {
    id: 3,
    question: "What is TypeScript?",
    answer: "TypeScript is a typed superset of JavaScript.",
  },
];

const Accordion = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveTab((prev) => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        FAQ Accordion
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((faq) => {
          const isOpen = activeTab === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex justify-between items-center p-5 text-left cursor-pointer hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </span>

                <span className="text-2xl text-gray-500">
                  {isOpen ? "-" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 leading-7 border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Accordion;
