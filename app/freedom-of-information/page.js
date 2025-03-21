"use client";
import { useEffect, useState, useCallback } from "react";
import LinkWithIcon from "../components/LinkWithIcon";
import Feedback from "../components/Feedback";
import Sidebar from "../components/sidebar";
import PageHeader from "../components/PageHeader";
import TextLink from "../components/textlink";
import DocumentCard from "../components/DocumentCard";

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
    { title: "How To Apply For Information", href: "#How" },
    { title: "How We Will Handle Your Request", href: "#Will" },
    { title: "Fees", href: "#Fees" },
    { title: "Transferring requests", href: "#Transferring" },
    { title: "Consultation with third parties", href: "#Consultation" },
    { title: "Exemptions", href: "#Exemptions" },
    { title: "The Public Interest Test", href: "#Public" },
    { title: "Internal Review", href: "#Internal" },
    { title: "Disclosure Log", href: "#Disclosure" },
    { title: "Environmental Information Regulations (EIR)", href: "#Environmental" },
    { title: "Copyright statement", href: "#Copyright" },
    { title: "Complaints", href: "#Complaints" },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 1000);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sampleDocuments = [
    {
      name: "Disclosure Log 2025",
      link: "/documents/7312/Preparers_Levy_2024-25.pdf",
      publication: "12 February 2025",
      format: "PDF, 197.0 KB",
    },
    {
      name: "Disclosure Log 2024",
      link: "/documents/7309/Preparers_Levy_2024-25_-_GDRs.pdf",
      publication: "31 December 2024",
      format: "PPDF, 242.1 KB",
    },
    {
        name: "Disclosure Log 2023",
        link: "/documents/7309/Preparers_Levy_2024-25_-_GDRs.pdf",
        publication: "11 December 2024",
        format: "PDF, 598.1 KB",
      },
      {
        name: "Disclosure Log 2022",
        link: "/documents/7309/Preparers_Levy_2024-25_-_GDRs.pdf",
        publication: "1 April 2022",
        format: "PDF, 267.8 KB",
      },
      {
        name: "Disclosure Log 2021",
        link: "/documents/7309/Preparers_Levy_2024-25_-_GDRs.pdf",
        publication: "23 April 2021",
        format: "PDF, 659.8 KB",
      },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] mt-5 px-6">
      <PageHeader
        title="Freedom of Information"
        published="Published: 25 September 2023"
        readTime="7 MINUTE READ"
      />
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Overview" id="Overview">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              The Freedom of Information Act 2000 (the Act) was passed on 30
              November 2000. The Act gives a general right of access to
              information held by public authorities, subject to the exemptions
              set out in the Act. It also imposes an obligation on public
              authorities to produce and maintain a Publication Scheme approved
              by the Information Commissioner.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              For the purposes of FOIA, the FRC is designated a public authority
              for only part of its functions, however from 2 December 2019 the
              FRC is choosing to voluntarily adopt full coverage under the Act.
              Further information on the FRC’s part-designation under law, under
              which we responded to requests until 1 December 2019 is available:
            </p>
            <TextLink
              link={{
                title: "Model publication scheme for limited information",
                href: "https://media.frc.org.uk/documents/Model_publication_scheme_for_limited_information.pdf",
              }}
            />
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              This note is designed to help you make a request for information
              under FOIA. It is not a guide to the Act itself.
            </p>

            <p className="my-[18px] leading-[25.2px] text-[18px]">
              The FRC takes seriously its obligations under FOIA and is
              committed to transparency wherever possible. In some circumstances
              however, it is not possible to disclose all or any of the
              information sought by a requestor. Under the Act, public
              authorities are entitled to withhold information when an
              appropriate
              <TextLink
                link={{
                  title: "exemption",
                  href: "https://ico.org.uk/for-organisations/foi/guide-to-managing-an-foi-request/exemptions/",
                }}
              />
              can be applied. Examples of information which might be withheld
              from disclosure include non-public information about live or past
              investigations; commercially sensitive information relating to the
              FRC itself or to one of the bodies we regulate; and personal data
              about FRC members. The FRC will consider each request under the
              Act on its own merits and determine whether exemptions might apply
              to the information we hold. In some cases, it may be appropriate
              for the FRC to neither confirm nor deny whether we hold any
              information responsive to the request.
            </p>
          </Section>

          <Section title="How To Apply For Information" id="How">
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-decimal pl-10">
              <li>
                Check if we already publish the information you want on our
                website.
              </li>
              <li>
                If you cannot find what you want you can send us an information
                request by submitting the{" "}
                <TextLink
                  link={{
                    title: "online form",
                    href: "https://forms.office.com/e/chncK3ur6R",
                  }}
                />{" "}
                , by email to{" "}
                <TextLink
                  link={{
                    title: "FOIA@frc.org.uk,",
                    href: "https://forms.office.com/e/chncK3ur6R",
                  }}
                />{" "}
                or by post:
                <ul className="py-4">
                  <li>Freedom of Information Act Requests</li>
                  <li>Financial Reporting Council</li>
                  <li>13th Floor</li>
                  <li>1 Harbour Exchange Square</li>
                  <li>London</li>
                  <li>E14 9GE</li>
                </ul>
              </li>
              <li>
                Please be as specific as possible about the information you
                would like to receive. To help us with our searches, please
                provide us with any additional information you think might be
                helpful such as the subject matter and a time frame.
              </li>
              <li>
                In some cases, we may need to transfer all or part of your
                request to another body or contact a third party before deciding
                if we can release information to you (see the sections on
                Transferring requests and Consultation with third parties,
                below). Please make clear in your request if you wish to be
                notified before we take those steps.
              </li>
              <li>
                If, after having read this note, you require further advice on
                filling out the form or you are unable to submit a request in
                writing because of a disability, please contact us by telephone
                (020 7492 2300) and ask to speak to a member of the FOIA team to
                discuss alternative arrangements.
              </li>
            </ul>
          </Section>

          <Section title="How We Will Handle Your Request" id="Will">
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-decimal pl-10">
              <li>
                Our FOIA team will acknowledge your request and may need to
                contact you to discuss it. If so, we will use the contact
                details you have provided unless you have indicated otherwise.
              </li>
              <li>
                We have 20 working days following the date on which your request
                was received in accordance with the Act, in which to respond to
                your request. The exceptions to this are where:
              </li>
            </ul>
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10">
              <li>
                a qualified exemption applies and the public interest test needs
                to be considered; or
              </li>
              <li>clarification is required; or</li>
              <li>
                where, after initial consideration of your request, a fee is
                requested.
              </li>
            </ul>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Where a clarification or a fee is required, the 20 working days
              will begin following the date on which the clarification or the
              fee is received. Where the public interest test applies, the
              timescale is extended by a “reasonable period”. We will tell you
              within the 20-day period which exemption(s) we believe apply to
              the information requested and give you our estimate of the date by
              which we expect to reach a decision regarding the application of
              this exemption.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Our response will explain if:
            </p>
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-decimal pl-10">
              <li>
                We have the information you have asked for and can provide you
                with a copy of it; or
              </li>
              <li>
                We have the information, but we cannot give it to you because we
                are exempt from doing so - in which case we will explain why; or
              </li>
              <li>
                We are unable to confirm or deny if we have the information - in
                which case we will explain why.
              </li>
            </ul>
          </Section>
          <Section title="Fees" id="Fees">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We may charge you a fee for responding to your request in
              accordance with The Freedom of Information and Data Protection
              (Appropriate Limit and Fees) Regulations 2004.
              <TextLink
                link={{
                  title: " Guidance",
                  href: "https://webarchive.nationalarchives.gov.uk/ukgwa/20150603184618/https:/www.justice.gov.uk/information-access-rights/foi-guidance-for-practitioners/fees",
                }}
              />
              on the application of these regulations is provided by the
              Ministry of Justice.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We will calculate any fee charged by looking at the costs directly
              and reasonably incurred in locating the information you have asked
              for and giving it to you. We will then send you a Fees Notice
              which you will have to pay within three months of your request –
              you will not receive information until you have paid the costs in
              the fees notice.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If the estimated cost of providing the information would be above
              the appropriate limit set by the government (currently £450, or 18
              hours working time) then we will not be under a duty to provide
              the information. However, we will inform you if the limit will be
              exceeded and we will try to let you know what can be provided
              within the limit. We will also consider whether it is reasonable
              to answer your request and charge an appropriate fee.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If the cost of providing the information is £450 or less, the FRC
              may charge for photocopying, printing and postage costs.
            </p>
          </Section>

          <Section title="Transferring requests" id="Transferring">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If you have requested information which we believe is held by
              another public authority, it may be appropriate for you to
              re-apply to the public authority concerned. Alternatively, we may
              transfer your request to another public authority. Before doing
              so, we will check that the other public authority holds the
              information requested. If you wish to be notified before the FRC
              transfers your request to another public authority, you should
              state this in your application.
            </p>
          </Section>

          <Section title="Consultation with third parties" id="Consultation">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We may notify third parties if a request for information about
              them is made. We may also need to consult third parties (including
              another public authority) in order to reach a decision on whether
              we can release information that you have requested. If you wish to
              be notified before the FRC consults a third party about your
              request, you should state this in your application.
            </p>
          </Section>
          <Section title="Exemptions" id="Exemptions">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              There are a number of exemptions under the Act and we may not be
              able to give you the information you have asked for. Detailed
              guidance on exemptions and how they may be applied can be found on
              the Information Commissioner’s website.
            </p>
          </Section>
          <Section title="The Public Interest Test" id="Public">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Some of the exemptions in the Act require us to undertake a public
              interest test. This means that even if the information is exempt,
              we must consider if there is a greater public interest in
              releasing the information to you. If we decide the public interest
              is better served by keeping the information exempt, then we will
              explain our reasons for this decision.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Below are some examples of exemptions that we think are most
              relevant to the kind of information we hold.
            </p>
            <p className="my-[18px] leading-[34.65px] tracking-[-0.9px] text-[31.5px]">
              Absolute exemptions - the public interest test does not apply
            </p>
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10">
              <li>Information accessible by other means</li>
              <li>Personal information</li>
              <li>Information provided in confidence</li>
            </ul>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Below are some examples of exemptions that we think are most
              relevant to the kind of information we hold.
            </p>
            <p className="my-[18px] leading-[34.65px] tracking-[-0.9px] text-[31.5px]">
              Non-Absolute exemptions – the public interest test applies
            </p>
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10">
              <li>Information intended for future publication</li>
              <li>Law enforcement</li>
              <li>Prejudice to effective conduct of public affairs</li>
              <li>Legal professional privilege</li>
              <li>Commercial interests</li>
            </ul>
          </Section>
          <Section title="Internal Review" id="Internal">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If you are not satisfied with a decision to provide or withhold
              information in response to your request or decision to levy a fee,
              you can request an Internal Review of that decision. An internal
              review request should be submitted within two months of the date
              of receipt of the response to your original letter.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Please send your request for an internal review to the FOIA team
              at
              <TextLink
                link={{
                  title: "foia@frc.org.uk",
                  href: "https://media.frc.org.uk/documents/Model_publication_scheme_for_limited_information.pdf",
                }}
              />
              or, in writing to
            </p>

            <ul>
              <li>Freedom of Information Act Requests</li>
              <li>Financial Reporting Council</li>
              <li>13th Floor</li>
              <li>1 Harbour Exchange Square</li>
              <li>London</li>
              <li>E14 9GE</li>
            </ul>

            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We aim to handle all internal reviews in 20 working days. Please
              see our Internal Review Process for further details.
            </p>

            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If you are not content with the outcome of the internal review,
              you also have a right of appeal to the{" "}
              <TextLink
                link={{
                  title: "ICO.",
                  href: "https://ico.org.uk/",
                }}
              />
            </p>
          </Section>

          <Section title="Disclosure Log" id="Disclosure">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Between April 2008 and November 2019, the FRC was subject to the
              obligations of the Freedom of Information Act (“the Act”) only in
              respect of the statutory functions delegated to the FRC by the
              Secretary of State under Part 42 of the Companies Act 2006 The FRC
              voluntarily adopted the Act in full in December 2019 and the full
              delegation was made law in April 2021.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              All requests under the Act made to the FRC between April 2008 and
              December 2020 are recorded in our{" "}
              <TextLink
                link={{
                  title: "disclosure log.",
                  href: "https://media.frc.org.uk/documents/Disclosure_Log_2018_to_2020.pdf",
                }}
              />
              This single document records all responses to requests made under
              the Act during this period and is ordered by the date they were
              received. From 2021, the FRC has produced a new disclosure log
              each year, which has been ordered by the date to which a request
              was responded. Those logs are available below:
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              From 2021, the FRC has produced a new disclosure log each year,
              which has been ordered by the date to which a request was
              responded. Those logs are available below:
            </p>
            <DocumentCard
              title="Documents"
              documents={sampleDocuments}
              paginate={false}
              color="#007eb5"
            />
            <p className="text-[18px] leading-[25.5px]">
              Specific details of information provided in response to a Freedom
              of Information Act request may be requested from us at
              FOIA@frc.org.uk.
            </p>
          </Section>

          <Section
            title="Environmental Information Regulations (EIR)"
            id="Environmental"
          >
            <TextLink
              link={{
                title: "Find out how to make an EIR request",
                href: "https://media.frc.org.uk/documents/Environmental_Information_Regulations_Request.pdf",
              }}
            />
          </Section>
          <Section title="Copyright statement" id="Copyright">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Unless otherwise stated, we own the copyright and any other rights
              in all material in this scheme. The FRC information may be
              reproduced in accordance with The Copyright Act 1988 and within
              Copyright Licensing Agency guidelines. Where information is
              reproduced, it must be reproduced accurately, not used in a
              misleading context and an appropriate acknowledgement must be
              inserted.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Permission to reproduce material does not extend to any material
              accessed through the Scheme that is in the copyright of third
              parties. You must obtain permission to reproduce such information
              from the copyright holder concerned.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Information made available under this Scheme must not be
              reproduced, copied or otherwise used for any commercial purposes.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Publications which can be accessed by the FRC website may be
              printed and downloaded on the conditions set out in the Copyright
              statement on the FRC website.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              <TextLink
                link={{
                  title:
                    "Read the full text of the Freedom of Information Act 2000",
                  href: "https://www.legislation.gov.uk/ukpga/2000/36/contents",
                }}
              />
              (Office of Public Sector Information website).
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              <TextLink
                link={{
                  title: "Find out more from the regulator",
                  href: "https://ico.org.uk/",
                }}
              />{" "}
              (the Information Commissioner's Office website)
            </p>
          </Section>
          <Section title="Complaints" id="Complaints">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
            If you are dissatisfied with the response to your request for information (including a decision to levy a fee) you may discuss the decision with the official who dealt with your request and/or complain in writing by email or by post to:
            </p>

            <ul className="my-[18px] leading-[25.2px] text-[18px]">
              <li>Legal Services Team</li>
              <li>Financial Reporting Council</li>
              <li>13th Floor</li>
              <li>1 Harbour Exchange Square</li>
              <li>London</li>
              <li>E14 9GE</li>
            </ul>

            <p className="my-[18px] leading-[25.2px] text-[18px]">
            Your complaint will be considered and the decision will be confirmed, reversed or amended. You will be informed in writing of the outcome of your complaint.
            </p>

            <p className="my-[18px] leading-[25.2px] text-[18px]">
            If you are dissatisfied with the decision, you have the right to apply to the  <TextLink
                link={{
                  title: " Information Commissioner",
                  href: "https://ico.org.uk/",
                }}
              /> for a decision as to whether the FRC has dealt with your request for information in accordance with the requirements of the Act.
             
            </p>
          </Section>
        </main>

        <Sidebar
          sidebarLinks={sidebarLinks}
          showBackToTop={showBackToTop}
          scrollToTop={scrollToTop}
        >
          <div className="mt-2">
            <LinkWithIcon href="/about" title="Contact us form" />
          </div>
        </Sidebar>
      </div>
      <Feedback />
    </div>
  );
}
