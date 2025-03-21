"use client";

import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/PageHeader";
import Feedback from "../../components/Feedback";
import Breadcrumbs from "../../components/Breadcrumb";
import TextLink from "../../components/textlink";

// sampleDocuments.js
const data = [
  {
    title: "Operational Policies",
    link: "/about-us/our-purpose/",
    description:
      "Read an overview of the FRC's key operational policies.",
  },
  {
    title: "Governance and Constitution",
    link: "/about-us/structure/",
    description:
      "The Board of the Financial Reporting Council (FRC) is made up of Non-executive directors and the CEO and is collectively responsible for the long-term success of the FRC.",
  },
  {
    title: "Anti-bribery policy statement",
    link: "/about-us/careers/",
    description:
      "The Financial Reporting Council (FRC) requires all those who are associated with it to observe the highest standards of impartiality, integrity and objectivity.",
  },
  {
    description:
      "The Financial Reporting Council is subject to the Government’s Business Impact Target (BIT) following the provisions of the Small Business, Enterprise and Employment Act 2015, as amended by the Enterprise Act 2016.",
    title: "Business Impact Target",
    link: "/about-us/restoring-trust-in-audit-and-corporate-governance/",
  },
  {
    title: "Regulatory Standards and Codes procedures",
    link: "/about-us/our-purpose/",
    description:
      "These procedures are intended to ensure transparency and consistency in the development and review of codes, standards and associated material.",
  },
  {
    title: "Consultation Responses Policy",
    link: "/about-us/structure/",
    description:
      "The FRC’s policy is to publish all consultation responses concerning regulatory standards and codes. We do not routinely publish responses that concern our annual plan and budget and funding.",
  },
  {
    title: "How We Manage Risk",
    link: "/about-us/careers/",
    description:
      "Learn about our risk management framework, which is designed to identify strategic and operational risks, to set our risk tolerance; and to ensure that risks are effectively managed and monitored.",
  },
  {
    description:
      "The Market Sensitive Information Policy sets out the principles, policies and procedures by which the FRC aims to protect market sensitive information (MSI) and guide our staff on how they should handle any information.",
    title: "Market Sensitive Information",
    link: "/about-us/restoring-trust-in-audit-and-corporate-governance/",
  },
  {
    title: "Memorandum of Understanding",
    link: "/about-us/our-purpose/",
    description:
      "View Memorandum of Understanding (MoU) between the Financial Reporting Council and other organisations.",
  },
  {
    title: "The FRC & The Regulators' Code",
    link: "/about-us/structure/",
    description:
      "Read how the FRC embodies the Regulators’ Code in our objectives, values, and behaviours.",
  },
  {
    title: "Procurement",
    link: "/about-us/careers/",
    description:
      "The FRC complies with the public sector procurement rules as stipulated in The Public Contracts Regulations 2015. Read our Procurement Policy.",
  },
  {
    description:
      "Under the Public Interest Disclosure Act 1998, an employee can report to the FRC concerns in relation to matters which are within the scope of the FRC’s regulatory duties, and such disclosures will be protected if certain criteria are fulfilled.",
    title: "Whistleblowing",
    link: "/about-us/restoring-trust-in-audit-and-corporate-governance/",
  },
  {
    title: "Modern Slavery Statement",
    link: "/about-us/our-purpose/",
    description:
      "Read the FRC's statement made in accordance with its commitment to meet section 54 of the Modern Slavery Act 2015.",
  },
  {
    title: "Disclaimer and Copyright",
    link: "/about-us/structure/",
    description:
      "Read our Disclaimer and Copyright statement.",
  },
  {
    title: "Privacy",
    link: "/about-us/careers/",
    description:
      "Our privacy notices tell you what to expect when the FRC collects information about individuals (personal data) and explain the activities we undertake and how we use that personal data to carry out those activities.",
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
        title="Policies and Procedures"
        text="FRC Policies and Procedures are available in the pages below."
      >
        <p className="leading-[25.2px] text-[18px] w-[65%]">
          Visit the Enforcement section for  <TextLink
              link={{
                title:
                  " Enforcement Procedures.",
                href: "/library/enforcement/enforcement-procedures/",
              }}
            />
        </p>
      </PageHeader>
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
