"use client";

import React from "react";
import SearchFilter from "../components/SearchFilter";
import Feedback from "../components/Feedback";

const categories = {
  Topics : [
    "Accounting",
    "Actuarial",
    "Assurance",
    "Auditing",
    "Competition",
    "Corporate Governance",
    "Corporate Reporting",
    "Enforcement",
    "ESG and Climate",
    "Ethics",
    "External Groups",
    "FRC Taxonomies",
    "Local Audit",
    "PIE Audits",
    "Research and Insights",
    "SMEs",
    "Standards, Codes & Guidance",
    "Stewardship",
    "Supervision",
    "Technology & Digital"
  ],
  Types: [
    "Bulletin",
    "Case summary",
    "Code",
    "Enforcement case",
    "Enforcement outcome",
    "External consultation response",
    "Key facts and trends",
    "Letters to audit firms",
    "Oversight",
    "Policy",
    "Practice note",
    "Press notice",
    "Procedure",
    "Register",
    "Report",
    "Review",
    "Scheme",
    "Signatories",
    "SORP",
    "Staff guidance note",
    "Standard",
    "Statement",
    "Supervision",
    "Taxonomies",
    "Thematic review"
  ],
  
  "FRC Teams": ["Accounting & Reporting Policy",
    "Actuarial Regulation",
    "Audit & Assurance",
    "Audit Firm Supervision",
    "Audit Market Supervision",
    "Audit Quality Review",
    "Corporate Governance & Stewardship",
    "Corporate Reporting Review",
    "Digital Reporting & Taxonomies",
    "Market Intelligence & Insights",
    "Professional Bodies Supervision"],
};

const items = [
  {
    name: "AI in Robotics",
    Topics: "AI",
    Types: "Article",
    "FRC Teams": "Team 123",
  },
  {
    name: "Building a Robot",
    Topics: "Robotics",
    Types: "Tutorial",
    "FRC Teams": "Team 456",
  },
  {
    name: "Automated Systems",
    Topics: "Automation",
    Types: "Video",
    "FRC Teams": "Team 789",
  },
];

export default function () {
  return (
    <div className="px-6">
      <SearchFilter categories={categories} items={items} />
      <Feedback />
    </div>
  );
}
