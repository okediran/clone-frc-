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
    { label: "Home", href: SLUGS.home },
    { label: "About the FRC", href: SLUGS.about },
    { label: "Policies and Procedures", href: SLUGS.policies },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Privacy"
        published="Published: 25 September 2023"
        readTime="2 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Privacy Statements" id="Privacy">
            <ul className="my-[18px] text-[18px] leading-[25.5px] list-disc pl-10 ">
              <li>
                Your use of our website www.frc.org.uk and its subdomains
                (Website):{" "}
                <TextLink
                  link={{
                    title: "Website Privacy Statement.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />
              </li>
              <li>
                For an explanation on how we process personal information in
                relation to our stakeholder activities see our{" "}
                <TextLink
                  link={{
                    title: "Stakeholder Engagement Privacy Notice.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />
              </li>
              <li>
                For an explanation on how we collect and process personal data
                in relation to our regulatory work see our Regulatory Privacy
                Notice.{" "}
                <TextLink
                  link={{
                    title: "Regulatory Privacy Notice.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />
              </li>
              <li>
                A summary of our regulatory activities is also available here{" "}
                <TextLink
                  link={{
                    title: "FRC Role and Responsibilities.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />
              </li>
              <li>
                Job applications:{" "}
                <TextLink
                  link={{
                    title: "Recruitment Privacy Notice.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />{" "}
              </li>
              <li>
                For an explanation on the kind of personal data the FRC collects
                when you visit us:{" "}
                <TextLink
                  link={{
                    title: "CCTV Privacy Notice.",
                    href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                  }}
                />
              </li>
            </ul>
          </Section>
          <Section title="Cookies" id="Cookies">
            <p className="mb-[18px] text-[18px] leading-[25.5px]">
              This Cookie Notice explains how the Financial Reporting Council
              Limited (collectively “FRC”, "we", "us", and "ours") use cookies
              and similar technologies to recognise you when you visit our
              website and its sub-domains at https://www.frc.org.uk ("Website").
              It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
            </p>
          </Section>
          <Section title="Unsubscribe" id="Unsubscribe">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              If you want to stop receiving updates about our activities or
              invitations to participate in FRC research, surveys or events from
              the FRC, please email{" "}
              <TextLink
                link={{
                  title: "unsubscribe@frc.org.uk",
                  href: "https://media.frc.org.uk/documents/Website_Privacy_Statement.pdf",
                }}
              />
            </p>
          </Section>
          <Section title="Your rights" id="Yourrights">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Under the DPA 2018 and the GDPR, you have rights as an individual
              which you can exercise in relation to the personal data we hold
              about you. Further information is available from the ICO on making
              a request -{" "}
              <TextLink
                link={{
                  title:
                    "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                  href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                }}
              />{" "}
              If you wish to find out what personal data, if any, we hold about
              you or if you wish to exercise any of your other privacy rights,
              you can contact our Privacy Team at{" "}
              <TextLink
                link={{
                  title: "privacy@frc.org.uk.",
                  href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                }}
              />
              To enable us to process your request as quickly as possible, we
              will need you to provide us with your name, contact details, a
              valid form of identification and a short description of the nature
              of the information you are seeking, relevant time periods,
              specific documents or a business area or name of an individual who
              may have created or have access to that information.
            </p>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              If you are interested in learning more about your privacy rights,
              you can find more information on the{" "}
              <TextLink
                link={{
                  title: "Information Commissioner",
                  href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                }}
              />{" "}
              website.
            </p>
          </Section>
          <Section
            title="Information sharing and transfers following EU Exit"
            id="Information"
          >
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              The FRC has committed as a policy to GDPR Model Clauses to offer
              assurance to EU Member State entities seeking to transfer personal
              data to us following the EU Exit.
            </p>

            <TextLink
              link={{
                title: "Further information",
                href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
              }}
            />
          </Section>
          <Section title="How to contact us" id="Information">
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              If you have any particular questions about our privacy policy, you
              can email{" "}
              <TextLink
                link={{
                  title: "privacy@frc.org.uk,",
                  href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                }}
              />{" "}
              or write to the Privacy Team, The Financial Reporting Council,
              13th Floor, 1 Harbour Exchange Square, London E14 9GE. Please
              email{" "}
              <TextLink
                link={{
                  title: "privacy@frc.org.uk,",
                  href: "https://ico.org.uk/your-data-matters/your-right-of-access/ ",
                }}
              />{" "}
              if you would like to contact our Data Protection Officer.
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
