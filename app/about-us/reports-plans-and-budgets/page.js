"use client";

import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/PageHeader";
import Feedback from "../../components/Feedback";
import Breadcrumbs from "../../components/Breadcrumb";

// sampleDocuments.js
const data = [
  {
    title: "FRC Annual Report and Accounts",
    link: "/about-us/our-purpose/",
    description: "We list our Annual Report and Accounts in a range of formats, including web accessible PDFs and iXBRL.",
  },
  {
    title: "FRC Plan and Budget",
    link: "/about-us/structure/",
    description: "We have published our latest Plan and Budget, outlining our priorities and objectives for the period 2024-2025.",
  },
  {
    title: "Annual Reports to the Secretary of State",
    link: "/about-us/careers/",
    description: "We report annually to the Secretary of State in our role as Independent Supervisor of Auditors General and on our rofessional Oversight Responsibilities.",
  },
  {
    description: "We publish a number of annual publications covering our roles in enforcement, accounting and auditing.",
    title: "Divisional Reports",
    link: "/about-us/restoring-trust-in-audit-and-corporate-governance/",
  }
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
        title="Reports, Plans and Budgets"
        text="The FRC issue annual publications, including our Annual Report and 3 Year plan."
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
