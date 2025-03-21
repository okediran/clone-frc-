"use client";

import React from "react";
import Card from "../components/card";
import PageHeader from "../components/PageHeader";
import Feedback from "../components/Feedback";

// sampleDocuments.js
const data = [
  {
    description:
      "Learn how the FRC serve the public interest by setting high standards of corporate governance, reporting and audit and by holding to account those responsible for delivering them.",
    title: "Our Purpose",
    link:'/about-us/our-purpose/'
  },
  {
    description:
      "The FRC is governed by its Board. The Board discharges some of its responsibilities directly and others through its two governance Committees and regulatory Committee. The regulatory committee is supported by Senior Advisors.",
    title: "FRC Structure",
    link:'/about-us/structure/'
  },
  {
    description: "Join us on our journey to becoming a stronger, more empowered and agile regulator. At the FRC you will work in the public interest for the benefit of those who rely on well-run companies reporting with transparency and honesty.",
    title: "Careers",
    link:'/about-us/careers/'
  },
  {
    description:
      "The Financial Reporting Council has published a Position Paper setting out the next steps to reform the UK’s audit and corporate governance framework.",
    title: "Restoring trust in Audit and Corporate Governance",
    link:'/about-us/restoring-trust-in-audit-and-corporate-governance/'
  },
  {
    description:
      "Learn about the FRC’s functions and the statutory and non-statutory sources they derive from.",
    title: "Role and Responsibilities",
    link:'/about-us/role-and-responsibilities/'

  },
  {
    description: "The FRC issue annual publications, including our Annual Report and 3 Year plan.",
    title: "Reports, Plans and Budgets",
    link:'/about-us/reports-plans-and-budgets/'

  },
  {
    description:
      "View the FRC's Policies and Prodedures.",
    title: "Policies and Procedures",
    link:'/about-us/policies-and-procedures/'
  },
  {
    description:
      "View the registers and reports published as part of the FRC's govenance reporting.",
    title: "Governance Reporting",
    link:'/about-us/governance-reporting/'

  },
  {
    description: "The FRC is funded by the audit profession, who are required to contribute under the provisions of the Companies Act 2006 and, with the agreement with HM Government, by other groups subject to, having regard to, or benefiting from FRC regulation.",
    title: "Funding",
    link:'/about-us/funding/'

  },
  {
    description:
      "The Financial Reporting Council often responds to external consultations that fall within its remit. View these responses.",
    title: "FRC Responses to External Consultations",
    link:'/about-us/funding/'
  },
  {
    description:
      "Read an overview of the FRC Tribunal process and see a list of the Tribunal Panel members.",
    title: "Tribunals",
    link:'/about-us/funding/'

  },
  {
    description: "Learn how the FRC works with international bodies to promote high-quality audit and corporate reporting.",
    title: "The FRC's International Activity",
    link:'/about-us/funding/'

  },
];
export default function page() {
  return (
    <div className="font-[18px] text-[#0b0c0c] mt-15 px-6">
      <PageHeader
        title="About the FRC"
      >
        <span>We regulate auditors, accountants and actuaries, and we set the UK’s Corporate Governance <br/> and Stewardship Codes. We promote transparency and integrity in business. Our work <br/>  is aimed at investors and others who rely on company reports, audit and high-quality risk <br/>  management.</span>
      </PageHeader>
      <div className="flex justify-between items-center mb-30 flex-wrap">
        {data.map((data, index) => (
          <Card title={data.title} description={data.description} key={index} link={data.link}/>
        ))}
      </div>
      <Feedback />
    </div>
  );
}
