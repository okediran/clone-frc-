"use client";

import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/PageHeader";
import Feedback from "../../components/Feedback";
import Breadcrumbs from "../../components/Breadcrumb";

// sampleDocuments.js
const data = [
  {
    title: "Structure overview",
    link: "/about-us/our-purpose/",
    imgsrc: "/assets/images/02.webp",
  },
  {
    title: "FRC Board",
    link: "/about-us/structure/",
    imgsrc: "/assets/images/15.2e16d0ba.fill-640x200.jpg",

  },
  {
    title: "Executive Committee",
    link: "/about-us/careers/",
    imgsrc: "/assets/images/12.2e16d0ba.fill-640x200.jpg",

  },
  {
    description: "There are no current vacancies.",
    title: "Non-Executive Recruitment",
    link: "/about-us/restoring-trust-in-audit-and-corporate-governance/",
    imgsrc: "/assets/images/03-1.webp",
  },
  {
    title: "Audit & Risk Committee",
    link: "/about-us/role-and-responsibilities/",
    imgsrc: "/assets/images/03-2.webp",
  },
  {
    title: "People Committee",
    link: "/about-us/reports-plans-and-budgets/",
    imgsrc: "/assets/images/03-3.webp",

  },
  {
    title: "Conduct Committee",
    link: "/about-us/policies-and-procedures/",
  },
  {
    title: "FRC Advisory Panel",
    link: "/about-us/governance-reporting/",
  },
  {
    title: "FRC's Senior Advisors",
    link: "/about-us/funding/",
  },
  {
    title: "Stakeholder Insight Group",
    link: "/about-us/funding/",
  },
  {
    title: "Appointment Committee",
    link: "/about-us/funding/",
  },
  {
    title: "Enforcement Committee Panel",
    link: "/about-us/funding/",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About the FRC", href: "/about-us" },
];
export default function page() {
  return (
    <div className="font-[18px] text-[#0b0c0c] mt-15 px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="FRC Structure"
        text="The FRC is governed by its Board. The Board discharges some of its responsibilities directly and others through its two governance Committees and regulatory Committee. The regulatory committee is supported by Senior Advisors."
      />
      <div className="flex justify-between items-center mb-30 flex-wrap">
        {data.map((data, index) => (
          <Card
            title={data.title}
            description={data.description}
            key={index}
            link={data.link}
            imgsrc={data.imgsrc}
          />
        ))}
      </div>
      <Feedback />
    </div>
  );
}
