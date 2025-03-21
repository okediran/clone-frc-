"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import LinkWithIcon from "../../components/LinkWithIcon";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import Image from "next/image";

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
    { title: "Independent", href: "#independent" },
    { title: "Fair", href: "#fair" },
    { title: "Effective", href: "#effective" },
    { title: "Equality and diversity statement", href: "#equality" },
    { title: "Influential", href: "#influential" },
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

  
  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Our Purpose"
        published="PUBLISHED: 13 SEPTEMBER 2023"
        readTime="1 MINUTE READ"
      />

      {/* Pie_chart_showing_the_FRC_purpose_and_values_.webp */}
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Image
            aria-hidden
            src="/assets/images/Pie_chart_showing_the_FRC_purpose_and_values_.webp"
            alt="Financial Reporting Council Logo"
            width={500}
            height={530}
          />
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            The purpose of the FRC is to serve the public interest and support
            UK economic growth by upholding high standards of corporate
            governance, corporate reporting, audit and actuarial work.
          </p>
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            Our Values are to be Independent, Fair, Effective, and Influential
            and to demonstrate these by our supporting behaviours.
          </p>

          <Section title="Independent" id="independent">
            <h2 className="text-[31.5px] tracking-[-0.9px]">Challenging</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Be curious and appropriately challenging to gain the facts,
              context and understanding. Be respectful but also courageous to
              obtain the information that is needed and act upon it.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px]">Evidence-based</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Ensure that relevant information is gathered and considered to
              support an objective decision-making process.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px]">Have Integrity</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Make principled straightforward and transparent decisions using
              the available information. Promote a culture that supports good
              governance, risk management and compliance.
            </p>
          </Section>
          <Section title="Fair" id="fair">
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Professional
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Act in a responsible and sustainable way. Be an ambassador for the
              FRC.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Proportionate
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Implement the proper balance of response, judgement and actions
              based upon the facts and mitigants of the matter.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">Consistent</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Promote the strategy and priorities of the FRC to ensure robust
              standards of decision-making and delivery both internally and
              externally.
            </p>
          </Section>

          <Section title="Effective" id="effective">
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">Decisive</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Make timely, practical, and balanced determinations, recognizing
              any wider implications. Resolve or escalate issues quickly and
              effectively.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Accountable
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Take personal responsibility for decisions and actions.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Collaborative
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Work with others. Seek out and share information and experiences
              to improve outcomes. Seek feedback to improve personal
              contributions and provide feedback to others.
            </p>
          </Section>

          <Section title="Influential" id="influential">
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Technical and Thought leadership
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Demonstrate the highest level of expertise in a particular field,
              area, or topic. Strive to be a subject matter expert and help
              others, internally and externally, to excel.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">Innovative</h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Drive change for the right reasons, adapt quickly and integrate
              new sustainable practices to maximise agility, productivity,
              engagement, and employee well-being.
            </p>
            <h2 className="text-[31.5px] tracking-[-0.9px] mb-7">
              Develop ourselves and Speak-up
            </h2>
            <p className="my-[18px] text-[18px] leading-[25.5px]">
              Engage with development and learning opportunities. Share
              knowledge to up-skill colleagues and inform our stakeholders.
              Pro-actively challenge unacceptable behaviours, actions, and
              decisions. Support diversity and inclusion and support others that
              do the right thing. On this page Independent Fair Effective
              Influential Related content Role and Responsibilities Learn about
              the FRC’s functions and the statutory and non-statutory sources
              they derive from.
            </p>
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
              title="Role and Responsibilities"
              discription="Learn about the FRC’s functions and the statutory and non-statutory sources they derive from."
            />
          </div>
        </Sidebar>
      </div>
      <Feedback />
    </div>
  );
}
