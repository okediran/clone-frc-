"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import TextLink from "../../components/textlink";
import DocumentCard from "../../components/DocumentCard";

// Reusable Section component that either renders a list (if `data` is provided)
// or renders custom children.
const Section = ({ title, data, children, id }) => (
  <section className="mb-8" id={id}>
    <h2 className="my-[40px] text-[40.5px] font-[400] leading-[44.55px] tracking-[-0.9px]">
      {title}
    </h2>
    {data ? (
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            <p className="text-[18px] leading-[25.5px] font-[700]">
              {item.category}
            </p>
            <p className="my-[18px] leading-[25.5px] text-[18px]">
              {item.details}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <div>{children}</div>
    )}
  </section>
);

export default function Careers() {
  const sidebarLinks = [
    { title: "Remit letter", href: "#Remitletter" },
    { title: "Publications", href: "#Publications" },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 1500);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About the FRC", href: "/about-us" },
  ];

  // sampleDocuments.js
  const sampleDocuments = [
    {
        name: "Framework Document between BEIS and the FRC (May 2022)",
        link: "#",
        publication: "21 June 2022",
        format:"PDF, 473.1 KB"
      },
    {
      name: "FRC Roles and Responsibilities: Schedule of Functions and Powers",
      link: "#",
      publication: "6 December 2022",
      format:"PDF, 220.7 KB"
    },
    {
        name: "Our Approach to Regulation: The FRC and the Regulators’ Code",
        link: "#",
        publication: "23 November 2022",
        format:"PDF, 397.6 KB"
      },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Role and Responsibilities"
        published="PUBLISHED: 25 SEPTEMBER 2023"
        readTime="1 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            The FRC’s functions derive from a number of sources.
          </p>
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            We have direct statutory powers in relation to audit regulation, as
            well as some statutory powers delegated to us by the Secretary of
            State.
          </p>
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            Some of our functions are supported by statutory obligations on
            other parties to meet our requirements and/or participate in
            arrangements provided by the FRC.
          </p>
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            Some of our functions have no statutory backing but derive their
            authority from widespread support from, and voluntary arrangements
            with, our stakeholders.
          </p>

          <Section title="Remit letter" id="Remitletter">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              In November 2023, the Secretary of State for Business and Trade
              issued the Financial Reporting Council (FRC) with a new remit
              letter updating the Government’s priorities for the FRC’s work.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC welcomes the Government’s recognition of the progress made
              to modernise as a regulator and the role of the FRC in making the
              UK the best place in the world to start, grow and invest in a
              business.
            </p>

            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The new remit letter sets out the FRC’s core responsibility to
              enhance public trust and confidence in the quality of audit,
              corporate reporting and governance whilst supporting the UK’s
              economic growth and international competitiveness.
            </p>
            <TextLink
              link={{
                title:
                  "Financial Reporting Council (FRC) remit: letter from Business Secretary, November 2023",
                href: "https://www.gov.uk/government/publications/financial-reporting-council-frc-remit-letter-from-business-secretary-november-2023",
              }}
            />
          </Section>
          <Section title="Fair" id="Publications">
            <DocumentCard
              title="Documents"
              documents={sampleDocuments}
             paginate={false} color="#007eb5"
            />
          </Section>
        </main>

        <Sidebar
          sidebarLinks={sidebarLinks}
          showBackToTop={showBackToTop}
          scrollToTop={scrollToTop}
        />
      </div>
      <Feedback />
    </div>
  );
}
