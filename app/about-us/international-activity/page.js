"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import { Icon } from "@iconify/react";
import LinkWithIcon from "../../components/LinkWithIcon";

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
    { title: "Overview", href: "#Overview" },
    { title: "Who we work with", href: "#Who" },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 900);
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
      name: "Preparers Levy 2024-25",
      link: "/documents/7312/Preparers_Levy_2024-25.pdf",
      publication: "16 July 2024",
      format: "PDF, 122.2 KB",
    },
    {
      name: "Preparers Levy 2024-25 - GDRs",
      link: "/documents/7309/Preparers_Levy_2024-25_-_GDRs.pdf",
      publication: "16 July 2024",
      format: "PDF, 121.6 KB",
    },
  ];

  const sample2Documents = [
    {
      name: "Insurance Levy 2024-25",
      link: "/documents/7311/Insurance_Levy_2024-25.pdf",
      publication: "16 July 2024",
      format: "	PDF, 118.4 KB",
    },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="The FRC's International Activity"
        published="Published: 1 October 2023"
        readTime="1 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Overview" id="Overview">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC works with international bodies to promote high-quality
              audit and corporate reporting. Comparability in financial
              reporting means that British companies can get access to capital
              in overseas markets. It also means that shareholders in the UK
              have more opportunities to invest their money.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Many of the largest accounting networks and associations have
              offices in the UK and come under our inspection and enforcement
              procedures. Our cooperation with other enforcement bodies -
              through the EU and internationally - strengthens this work.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              As well as working with international organisations, we
              collaborate with other regulators and standard setters to identify
              common goals and reduce the risk of inconsistent requirements on
              those we regulate.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              We have strong relationships with our EU, US and Commonwealth
              counterparts and we are working more and more with organisations
              in China, Japan and Singapore to promote trade and investment
              relationships with Asia.
            </p>
          </Section>
          <Section title="Who we work with" id="Who">
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10">
              <li>European Corporate Governance Codes Network</li>
              <li>
                European Commission
                <ul className="p-4">
                  <li className="flex items-center gap-2.5">
                    {" "}
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    Committee of European Audit Oversight Bodies (CEAOB)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    European Financial Reporting Advisory Group (EFRAG)
                  </li>
                </ul>
              </li>
              <li>European Parliament</li>
              <li>World Bank</li>
              <li>OECD</li>
              <li>IOSCO</li>
              <li>Financial Stability Board</li>
              <li>
                International Forum of Accounting Standard Setters (IFASS)*
              </li>
              <li>European Financial Reporting Advisory Group (EFRAG)</li>
              <li>European Enforcement Coordination Sessions of ESMA (EECS)</li>
              <li>
                International Federation of Accountants (IFAC)
                <ul className="p-4">
                  <li className="flex items-center gap-2.5">
                    {" "}
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    International Accounting Standards Board (IASB)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    International Auditing and Assurance Standards Board (IAASB)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    International Ethics Standards Board (IESBA)
                  </li>
                </ul>
              </li>
              <li>US Securities and Exchange Commission (SEC)</li>
              <li>
                International Forum of Independent Audit Regulators (IFIAR)
              </li>
              <li>US Public Company Audit Oversight Board (PCAOB)</li>
              <li>Federal Accounting Standards Board (FASB)</li>
              <li>
                International Actuarial Association Council (IAA)
                <ul className="p-3">
                  <li className="flex items-center gap-2.5">
                    <Icon
                      icon="material-symbols:circle-outline"
                      width="11"
                      height="11"
                    />{" "}
                    Standard Setters Roundtable (SSRT)
                  </li>
                </ul>
              </li>
              <li>Actuarial Association of Europe (AAE)</li>
              <li>International Association of Insurance Supervisors (IAIS)</li>
            </ul>
          </Section>
        </main>
        <Sidebar
          sidebarLinks={sidebarLinks}
          showBackToTop={showBackToTop}
          scrollToTop={scrollToTop}
        >
          <div className="mt-2">
            <LinkWithIcon
              href="/about"
              title="International accounting activities"
              discription="The FRC monitor and influence the IASB by responding to relevant consultations, undertaking outreach with stakeholders and liaison with other national standard setters."
            />
          </div>
        </Sidebar>
      </div>
      <Feedback />
    </div>
  );
}
