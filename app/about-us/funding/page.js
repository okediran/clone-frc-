"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import DocumentCard from "../../components/DocumentCard";
import TextLink from "../../components/textlink";

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
        title="Funding"
        published="Published: 16 July 2024"
        readTime="3 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Overview" id="Overview">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC funding arrangements for the 2024/25 financial year are
              set out in our
              <TextLink
                link={{
                  title: "FRC Plan and Budget 2024-2025.",
                  href: "/documents/7127/Financial_Reporting_Council_Plan_and_Budget_2024-25_QLMohMA.pdf",
                }}
              />
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC is funded by the audit profession, who are required to
              contribute under the provisions of the Companies Act 2006 and,
              with the agreement with HM Government, by other groups subject to,
              having regard to, or benefiting from FRC regulation.
            </p>
          </Section>
          <Section title="Accountancy profession" id="Accountancyprofession">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The preparers levy is the annual levy on:
            </p>
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10">
              <li>
                Companies listed on the London Stock Exchange with a Premium or
                Standard listing (EF07 & EF08).
              </li>
              <li>UK companies quoted on AIM and listed on AQUIS.</li>
              <li>
                Large private entities with a turnover of £500m or more (EF04).
              </li>
              <li>Global Depository Receipts issuers (EF09).</li>
              <li>
                Government Departments, local authorities and other public
                sector organisations.
              </li>
            </ul>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The accountancy profession’s contribution to the FRC’s annual
              funding requirement is paid by the Consultative Committee of
              Accountancy Bodies (CCAB), whose members are ACCA, CAI, CIPFA,
              ICAEW, and ICAS; and by CIMA which contributes to the FRC’s
              funding requirement under the terms of a separate agreement with
              the FRC.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The ICAEW, ICAS, ACCA and CAI are Recognised Supervisory Bodies
              (RSB) for audit under Schedule 10 of the Companies Act 2006. The
              FRC, as the audit competent authority, delegates certain audit
              regulatory tasks to each RSB under a Delegation Agreement.
              Schedule 10 of the Companies Act 2006 and each Delegation
              Agreement also places an obligation on a RSB to fund the FRC’s
              performance of any tasks that have not been delegated where these
              relate to the regulation of auditors registered with that RSB.
              This covers the costs of the FRC’s audit review activities, audit
              enforcement activities and standard-setting procedures.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The activities of the FRC’s Audit Quality Review team are also
              funded through the National Audit Office and fees levied on
              Recognised Auditors registered in the Crown Dependencies.
            </p>
          </Section>
          <Section title="Preparers levy 2024/25" id="Preparerslevy">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The amounts payable by individual organisations under the
              preparers levy are determined through a minimum levy and further
              amounts for organisations above a certain size, with the rate per
              £m declining in five levy bands, aligned with the FCA levy
              arrangements. The amounts charged to individual levy payers are
              based on their market capitalisation (for listed companies),
              turnover (for other companies) or annual expenditure (for public
              sector organisations).
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FCA collect the insurance levy and part of the preparers levy
              on our behalf. Where we identify a large private entity that is
              also a subsidiary of a listed company, we ask the FCA to invoice
              the parent for the share of their subsidiary on the same invoice
              as EF04. Where more than one subsidiary is identified we calculate
              the levy on the combined turnover. This has the effect of reducing
              the levy charge.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Main market companies with a Premium listing pay the full levy;
              companies with a Standard listing receive a 20% discount. AIM and
              AQUIS market group companies and large private entities receive a
              50% discount. Public sector organisations receive 75% discount.
            </p>

            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The levy for Global Depositary Receipt issuers is a fixed amount,
              set annually for companies that have designated the UK as their
              home competent authority and, at a lower rate, for other issuers.
            </p>
            <DocumentCard
              title="Documents"
              documents={sampleDocuments}
              paginate={false}
              color="#007eb5"
            />
          </Section>
          <Section title="Insurance levy 2024/25" id="Insurancelevy">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The insurance levy is charged to insurance companies on the same
              invoice as the FCA fees. The FRC sets a levy equivalent to a
              percentage of the fees charged by the FCA and PRA for their fee
              blocks A3 (insurers – general) and A4 (insurers - life). For
              2024/25 the FRC will charge 0.95% of the fees charged by the FCA
              and PRA for their fee blocks A3 and A4.
            </p>
            <DocumentCard
              title="Documents"
              documents={sample2Documents}
              paginate={false}
              color="#007eb5"
            />
          </Section>
          <Section title="Pension levy 2024/25" id="Pensionlevy">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC pension levy applies to all Defined Benefit and Defined
              Contribution schemes with 5,000 members or more at a pension levy
              rate based on the numbers of members. The levy rate to be applied
              to individual schemes will be based on latest available data on
              scheme membership provided by The Pensions Regulator. The rate for
              2024/25 is £2.80 per 100 members.
            </p>
            <DocumentCard
              title="Documents"
              documents={[
                {
                  name: "Insurance Levy 2024-25",
                  link: "/documents/7311/Insurance_Levy_2024-25.pdf",
                  publication: "16 July 2024",
                  format: "PDF, 119.8 KB",
                },
              ]}
              paginate={false}
              color="#007eb5"
            />
          </Section>
          <Section
            title="Institute and Faculty of Actuaries (IFoA)"
            id="Pensionlevy"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              When the FRC took on responsibilities for actuarial standards and
              regulation in April 2006 it was agreed that the IFoA would
              contribute a share equivalent to 10% of the cost of these
              actuarial activities.
            </p>
          </Section>
          <Section
            title="Third Country Auditors – Registration and renewal fees"
            id="Pensionlevy"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              A third country auditor seeking registration in the UK must pay to
              the FRC a fee upon application and an annual fee thereafter for
              renewal of its registration in accordance with the Third Country
              Auditors (Fees) Instrument 2021. This fee is based upon our
              anticipated costs to administer the regime. The amounts payable
              are determined by the anticipated cost of processing applications
              from each of the three categories of registration; Equivalent,
              Transitional or Full. Audit firms from countries which have not
              been assessed as having audit oversight, monitoring and discipline
              regimes equivalent to those of the UK or regimes which are moving
              in that direction involve the greatest amount of processing and
              therefore incur the highest fees.
            </p>
          </Section>
          <Section
            title="Third Country Auditors – Registration and renewal fees"
            id="Pensionlevy"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              A third country auditor seeking registration in the UK must pay to
              the FRC a fee upon application and an annual fee thereafter for
              renewal of its registration in accordance with the Third Country
              Auditors (Fees) Instrument 2021. This fee is based upon our
              anticipated costs to administer the regime. The amounts payable
              are determined by the anticipated cost of processing applications
              from each of the three categories of registration; Equivalent,
              Transitional or Full. Audit firms from countries which have not
              been assessed as having audit oversight, monitoring and discipline
              regimes equivalent to those of the UK or regimes which are moving
              in that direction involve the greatest amount of processing and
              therefore incur the highest fees.
            </p>
          </Section>
          <Section title="Other income">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC also generates income from its publications, including
              from electronic rights. The XBRL project is funded by HMRC,
              Companies House, the Charity Commission, the Irish Revenue, and
              the FCA.
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
