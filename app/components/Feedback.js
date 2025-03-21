"use client";

import React, { useState, useCallback } from "react";

// Reusable Button component with common styles
const Button = ({ children, onClick, className = "", ...props }) => {
  const baseClasses =
    "bg-[#034996] text-white px-4 py-2 hover:bg-blue-700 cursor-pointer";
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Initial prompt asking if the page is useful
const FeedbackPrompt = ({ onSelect }) => (
  <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
    <p className="font-bold text-2xl">Is this page useful?</p>
    <div className="flex space-x-4">
      <Button onClick={() => onSelect("yes")}>Yes</Button>
      <Button onClick={() => onSelect("no")}>No</Button>
    </div>
  </div>
);

// Form for detailed feedback
const FeedbackForm = ({ feedbackType, onSubmit, onClose }) => (
  <div className="flex flex-col md:flex-row justify-between gap-4">
    <div className="flex-1">
      <h2 className="font-bold text-2xl">
        {feedbackType === "yes"
          ? "Thank you. What did you like about this information?"
          : "Please tell us what we can improve about this information?"}
      </h2>
      <textarea
        name="comment"
        className="w-full border p-2 mt-2"
        cols="50"
        rows="5"
      ></textarea>
      <div className="mt-2">
        <Button onClick={onSubmit}>Send</Button>
      </div>
    </div>
    <div className="flex items-start">
      <button onClick={onClose} className="font-bold text-2xl underline">
        Close
      </button>
    </div>
  </div>
);

// Submission success message
const FeedbackSuccess = () => (
  <div className="font-bold text-2xl">
    Thank you for your feedback! 
  </div>
);

// Main Feedback component managing state and transitions
const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    setTimeout(() => {
      setFeedbackType(null);
      setSubmitted(false);
    }, 3000);
  }, []);

  return (
    <div className=" my-20 py-4 space-y-6">
      {!feedbackType && !submitted && (
        <FeedbackPrompt onSelect={setFeedbackType} />
      )}
      {feedbackType && !submitted && (
        <FeedbackForm
          feedbackType={feedbackType}
          onSubmit={handleSubmit}
          onClose={() => setFeedbackType(null)}
        />
      )}
      {submitted && <FeedbackSuccess />}
    </div>
  );
};

export default Feedback;
