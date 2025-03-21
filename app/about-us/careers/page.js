"use client";
import { useEffect, useState, useCallback } from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import LinkWithIcon from "../../components/LinkWithIcon";
import Feedback from "../../components/Feedback";
import Sidebar from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import Image from "next/image";
import TextLink from "../../components/textlink";

// Reusable Section component that either renders a list (if `data` is provided)
// or renders custom children.
const Section = ({ title, data, children }) => (
  <section className="mb-8">
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
    { title: "Why join the FRC?", href: "#" },
    { title: "Benefits", href: "#" },
    { title: "Disability confident", href: "#" },
    { title: "Equality and diversity statement", href: "#" },
    { title: "Our values", href: "#" },
    { title: "Accreditations", href: "#" },
    { title: "Memberships", href: "#" },
    { title: "Current vacancies", href: "#" },
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

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About the FRC", href: "/about-us" },
  ];

  const benefits = [
    {
      category: "Pay",
      details:
        "Base pay taking into account skills, subject specialism and experience.",
    },
    {
      category: "Pension",
      details:
        "Generous pension scheme with a 10% employer pension contribution (Aviva).",
    },
    {
      category: "Health",
      details:
        "Employee assistance provider 'Unum Help@hand' offering online counselling, online GP appointments, physio, medical second opinion, and more.",
    },
    {
      category: "Annual Leave",
      details:
        "30 days of annual leave with the option to buy or sell up to five days.",
    },
    {
      category: "Bank Holidays",
      details:
        "Flexible bank holidays that can be booked anywhere in the calendar year.",
    },
    {
      category: "Life Assurance",
      details:
        "Generous life assurance offer equal to 4x your basic annual salary.",
    },
    {
      category: "Flexible Working",
      details:
        "Hybrid working with a minimum of two days in the office per week.",
    },
    {
      category: "Learning and Development",
      details: "Up to six days off to pursue learning and development.",
    },
    {
      category: "Volunteering",
      details:
        "Two days of volunteering to support FRC Corporate Social Responsibility.",
    },
  ];

  return (
    <div className="font-[18px] text-[#0b0c0c] px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Careers"
        published="PUBLISHED: 25 SEPTEMBER 2023"
        readTime="2 MINUTE READ"
      />
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <p className="my-[18px] text-[18px] leading-[25.5px]">
            The FRC promotes transparency and integrity in business by setting
            codes and standards for accounting and actuarial work; reviewing the
            quality of corporate reporting and audit; and taking enforcement
            action where necessary. Following Sir John Kingman’s independent
            review, the FRC is transforming into a new regulator, the Audit,
            Reporting and Governance Authority (ARGA). As the scope of our work
            grows we will require significantly more resource. Join us on our
            journey to becoming a stronger, more empowered and agile regulator.
            At the FRC you will work in the public interest for the benefit of
            those who rely on well-run companies reporting with transparency and
            honesty. The team at the FRC is comprised of high calibre
            individuals who work in a collaborative and collegiate way. The FRC
            has flexible working and is committed to the personal and
            professional development of all its people.
          </p>

          <Section title="Why join the FRC?">
            <div className="overflow-hidden relative h-[450px]">
              <iframe
                src="https://player.vimeo.com/video/850158123?app_id=122963"
                width="800"
                height="800"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Why join the FRC?"
                className="absolute top-[-180px]"
              ></iframe>
            </div>
          </Section>

          <Section title="Benefits" data={benefits} />

          <Section title="Disability confident">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We’re a signatory to the Government’s Disability Confident Scheme.
              This means we guarantee disabled people an interview if they meet
              the minimum criteria for any job vacancy.
            </p>
          </Section>

          <Section title="Equality and diversity statement">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We are committed to promoting equality and diversity in all areas
              of our work, irrespective of gender, disability, ethnicity, sexual
              orientation, nationality, age or religion. The FRC is an inclusive
              employer and values diversity among its employees.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              For an explanation of how we collect and process personal
              information in connection with our recruitment activities, please
              see our
              <TextLink
                link={{ title: "recruitment privacy notice.", href: "#" }}
              />
            </p>
          </Section>

          <Section title="Our values">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              The purpose of the FRC is to serve the public interest and support
              UK economic growth by upholding high standards of corporate
              governance, corporate reporting, audit and actuarial work.
            </p>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Our Values are to be Independent, Fair, Effective, and Influential
              and to demonstrate these by our supporting behaviours. Our values
              guide, our behaviours day by day, and how we work together.
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Influential
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  Through technical expertise and{" "}
                  <span className="font-[700]">thought leadership,</span> our
                  people are <span className="font-[700]">innovative</span> in
                  driving change. They{" "}
                  <span className="font-[700]">develop</span> themselves and
                  others, <span className="font-[700]">speak up</span>, value
                  diversity and support others to do the right thing.
                </p>
              </li>
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">Fair</p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  Our people act in a{" "}
                  <span className="font-[700]">
                    professional, proportionate, consistent
                  </span>{" "}
                  manner to ensure robust standards of decision-making and
                  delivery both internally and externally.
                </p>
              </li>
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Effective
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  Our people are{" "}
                  <span className="font-[700]">decisive, accountable</span> and{" "}
                  <span className="font-[700]">collaborative</span> when working
                  with others to share information and experiences to improve
                  outcomes.
                </p>
              </li>
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Independent
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  Our people <span className="font-[700]">challenge</span>{" "}
                  ideas, make{" "}
                  <span className="font-[700]">evidence-based decisions</span>{" "}
                  and always act with{" "}
                  <span className="font-[700]">integrity</span>.
                </p>
              </li>
            </ul>
          </Section>

          <LinkWithIcon href="/about" />

          <Section title="Accreditations">
            <ul className="space-y-4">
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Menopause Friendly Accreditation
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  The Menopause Friendly Accreditation was established by
                  <TextLink
                    link={{
                      title: "Henpicked: Menopause In The Workplace",
                      href: "#",
                    }}
                  />
                  in 2020 to certify high standards and proven practices that
                  embrace menopause in the workplace.
                </p>
              </li>
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Disability Confident Accreditation
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  Disability Confident is creating a movement of change,
                  encouraging employers to think differently about disability
                  and take action to improve how they recruit, retain and
                  develop disabled people. The FRC is currently accredited to
                  level 2 disability confident employer status.
                </p>
              </li>
            </ul>
          </Section>
          <Image
            aria-hidden
            src="/assets/images/careers_accreditations_logos_070325.webp"
            alt="Financial Reporting Council Logo"
            width={630}
            height={800}
          />

          <Section title="Memberships">
            <ul className="space-y-4">
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Women in Finance Charter
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  This is a commitment by HM Treasury and signatory firms to
                  work together to build a more balanced and fair industry.
                  Firms that sign up to this Charter are pledging to be the best
                  businesses in the sector.
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  The Charter reflects the government’s aspiration to see gender
                  balance at all levels across financial services firms. A
                  balanced workforce is good for business – it is good for
                  customers, for profitability and workplace culture, and is
                  increasingly attractive for investors.
                </p>
              </li>
              <li>
                <p className="text-[18px] leading-[25.5px] font-[700]">
                  Business Disability Forum
                </p>
                <p className="my-[18px] leading-[25.5px] text-[18px]">
                  The FRC is currently a member of the Business Disability Forum
                  which is an organisation to support employers becoming a
                  disability smart business and provides advice and support to
                  employers on disability inclusion to remove barriers for
                  disabled employees and consumers.
                </p>
              </li>
            </ul>
          </Section>
          <Image
            aria-hidden
            src="/assets/images/careers_memberships_logos_040325.webp"
            alt="Financial Reporting Council Logo"
            width={330}
            height={530}
          />

          <Section title="Current vacancies">
            <div className="border-l-[10px] my-[40px] border-[#007eb5] bg-gray-100 p-[40px] flex flex-col gap-3">
              <h2 className="text-[31.5px] leading-[34.65px] tracking-[-0.9px]">
                Careers portal
              </h2>
              <p>We list all current vacancies on our careers portal.</p>
              <TextLink
                link={{
                  title: "Browse all roles on our careers portal",
                  href: "#",
                }}
              />
            </div>
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
              title="Diversity and Inclusion"
              discription="At the FRC, we are passionate about creating an open, healthy, and inclusive workplace culture that promotes diversity and encourages employees to be their authentic self."
            />
          </div>
        </Sidebar>
      </div>
      <Feedback />
    </div>
  );
}
