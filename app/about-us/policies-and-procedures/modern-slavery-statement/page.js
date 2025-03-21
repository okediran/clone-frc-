"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../../components/Breadcrumb";
import Feedback from "../../../components/Feedback";
import Sidebar from "../../../components/sidebar";
import PageHeader from "../../../components/PageHeader";
import TextLink from "../../../components/textlink";
import SLUGS from "../../../utils/slug";

// Reusable Section component that either renders a list (if `data` is provided)
// or renders custom children.
const Section = ({ title, data, children, id }) => (
  <section className="mb-8" id={id}>
    <h2 className="my-[40px] text-[40.5px] font-[400] leading-[44.55px] tracking-[-0.9px]">
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

export default function Careers() {
  const sidebarLinks = [
    { title: "Overview", href: "#Overview" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Preparerslevy", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
    { title: "Accountancy profession", href: "#Accountancyprofession" },
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
    { label: "Home", href: SLUGS.home },
    { label: "About the FRC", href: SLUGS.about },
    { label: "Policies and Procedures", href: SLUGS.policies },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Modern Slavery Statement"
        published="Published: 25 September 2023"
        readTime="3 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              The Financial Reporting Council (“FRC”) is making this statement
              in accordance with its commitment to meet section 54 of the Modern
              Slavery Act 2015 (“MSA”). This is the FRC’s second statement
              relating to the MSA. It covers the steps taken for the financial
              year 1 April 2020 to 31 March 2021.
            </p>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              The FRC does not condone any activity which constitutes modern
              slavery or human trafficking under the MSA, and we expect our
              suppliers (and supply chain) to maintain the same approach and to
              have policies and procedures in place to minimise the risk of
              modern slavery occurring.
            </p>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              In the event of modern slavery practices being identified in (a)
              the provision of an FRC supplier contract or (b) the FRC business,
              the FRC will:
            </p>
            <ul className="list-disc pb-[18px] pl-[40px]">
              <li>Notify the appropriate law enforcement agency/ies.</li>
              <li>
                Work openly and proactively with key stakeholders to resolve
                issues and change working practices.
              </li>
              <li>Consider terminating the contract (if applicable).</li>
            </ul>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              The FRC does not undertake activities that are considered to be at
              high risk of slavery or human trafficking but takes very seriously
              the need to identify and respond to any such incidents.
            </p>
          </Section>
          <Section title="The FRC" id="FRC">
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              The purpose of the FRC is to serve the public interest and support
              UK economic growth by upholding high standards of corporate
              governance, corporate reporting, audit and actuarial work.
            </p>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              We monitor the application of the standards, holding parties to
              account and, where in the public interest, we enforce them.
              Companies that are run to the highest standards and whose reports
              are trusted for their accuracy and openness make a positive
              contribution to society by making sound decisions in their own
              long-term interest and that of all stakeholders.
            </p>
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              The FRC is a public sector organisation upholding core standard of
              a public service, including but not limited to (a) in the spirit
              of, as well as to the letter of, the law and (b) high ethical
              standards. We continually aim to provide a professional,
              pro-active and positive response to our internal and external
              stakeholders. We are committed to continually improving our
              policies and practices to meet or surpass key stakeholder
              expectations.
            </p>
          </Section>
          <Section title="Our Policies" id="Policies">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              We recognise our responsibility to operate our business with
              effective policies and procedures in order to be fair and ethical.
              Relevant policies:
            </p>

            <ul className="list-disc pb-[18px] pl-[40px]">
              <li>
                Employee Handbook -The FRC has a robust Staff Handbook
                incorporating a Code of Conduct, Grievance Policy and Diversity
                & Inclusion Policy. This key information seeks to ensure all
                employees understand the work environment and the high standards
                that they must adhere to.
              </li>
              <li>
                Whistleblowing -The FRC’s approach to Whistleblowing is
                two-fold. Firstly, we have raised awareness and understanding of
                how our staff and partners can report concerns without fear of
                retaliation. Secondly, the FRC provides information and the
                ability to external stakeholders to be able raise any concerns.
                https://www.frc.org.uk/about-the-frc/whistleblowing
              </li>
              <li>
                Procurement Policy - The FRC’s Procurement Policy sets out our
                approach to the fair and equal treatment of all suppliers. The
                Policy provides a framework of good practice and control
                mechanisms (alongside adherence to the Public Contracts
                Regulations 2015).
              </li>
              <li>
                Recruitment Policy - The FRC operates robust recruitment
                practices including, but not limited to, adherence to the Civil
                Service Recruitment Principles. We ensure that the people we
                hire have the right to work in the UK and that their basic
                rights as workers are protected. We commit to providing fair
                wages and benefits and comply with all applicable minimum wage
                laws in the UK including the London Living Wage.
              </li>
            </ul>
          </Section>
          <Section title="Our Procurement" id="Procurement">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              We are committed to the effective management of our third-party
              expenditure and supplier arrangements. The FRC has a dedicated
              Procurement team.
            </p>
            <h4 className="text-[31.5px] my-[40px]">What have we done to support our commitment to the MSA</h4>
            <ul className="list-disc pb-[18px] pl-[40px]">
              <li>
                Dedicated Procurement team with qualified and experienced
                resource
              </li>
              <li>
                Raised awareness with our suppliers through information on our
                website:
              </li>
              <li>
                Introduced greater supplier due diligence to check adherence to
                their MSA statement and their general practice in this area.
              </li>
              <li>
                Standardised terms and conditions to incorporate MSA provisions.
              </li>
              <li>Reviewed and updated to the Whistleblowing policy.</li>
              <li>
                Developed and delivered Modern Slavery awareness training.
              </li>
              <li>
                Initiated the development of a framework for risk assessment
                (i.e., review of our methodology for identifying the impact of
                the MSA on our activities and our supply chain).
              </li>
              <li>
                Engaged with Department for Business, Energy and Industrial
                Strategy to share best practice.
              </li>
            </ul>
            <h4 className="text-[31.5px] my-[40px]">Plans for 2023/2024</h4>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
            In 2023/24 we will:
            </p>
            <ul className="list-disc pb-[18px] pl-[40px]">
              <li>
              Refresh Modern Slavery training for key staff responsible for procurement.
              </li>
              <li>
              Progress the modern slavery assessment tool to identify and highlight contracts that may have high exposure to the risk of exploitation of workers in their supply chain. Initial work has been undertaken across the majority of FRC expenditure and will continue this year to ensure all contracts have been assessed.
              </li>
            </ul>
            <TextLink
                link={{
                  title: "Read the FRC’s Modern Slavery Statement (2023)",
                  href: "https://media.frc.org.uk/documents/FRC_Modern_Slavery_Statement_2023-24.pdf ",
                }}
              />
               <p className="my-[18px] text-[18px] leading-[25.5px]">
               For any queries, please contact 
               <TextLink
                link={{
                  title: " thegovernanceteam@frc.org.uk",
                  href: "https://media.frc.org.uk/documents/FRC_Modern_Slavery_Statement_2023-24.pdf ",
                }}
              />
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
            This statement was approved on 11 September 2024 by the FRC’s Board of Directors who will review the statement annually.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px] font-[700]">
            Signed on behalf of the FRC
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px] font-[700]">
            Richard Moriarty
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px] font-[700]">
            Chief Executive Officer
            </p>
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
