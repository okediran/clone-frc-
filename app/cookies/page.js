"use client";
import Feedback from "../components/Feedback";


// Reusable Section component that either renders a list (if `data` is provided)
// or renders custom children.

export default function Careers() {
  return (
    <div className="font-[18px] text-[#0b0c0c] px-6 pt-20">    
      <Feedback />
    </div>
  );
}
