"use client";

import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/PageHeader";
import Feedback from "../../components/Feedback";
import Breadcrumbs from "../../components/Breadcrumb";

// sampleDocuments.js
const data = [
  {
    title: "Board and ExCo Expenses",
    link: "/about-us/our-purpose/",
    description: "Staff or non-executives who incur expenses whilst undertaking FRC business will be reimbursed by the FRC in accordance with the FRC Travel and Expenses Policy.",
  },
  {
    title: "Register of Interests",
    link: "/about-us/structure/",
    description: "We maintain and publish a Register of Interests in accordance with the Code of Conduct for Board and committee members, which supports the FRC’s commitment to transparency.",
  },
  {
    title: "Gift and Hospitality Register",
    link: "/about-us/careers/",
    description: "We maintain a Gifts and Hospitality Register in accordance with the Code of Conduct.",
  },
  {
    description: "Read our annual reports and submissions on equalty.",
    title: "Equality reporting",
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
        title="Governance Reporting"
        text="We publish regular registers and reports as part of the FRC's govenance reporting."
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
