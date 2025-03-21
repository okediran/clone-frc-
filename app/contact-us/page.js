"use client";
import { useEffect, useState, useCallback } from "react";
import LinkWithIcon from "../components/LinkWithIcon";
import Feedback from "../components/Feedback";
import Sidebar from "../components/sidebar";
import PageHeader from "../components/PageHeader";
import TextLink from "../components/textlink";
import SLUGS from "../utils/slug";
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
    { title: "Enquiries", href: "#enquiries" },
    { title: "Complaints", href: "#complaints" },
    { title: "Speaker request", href: "#Speaker" },
    { title: "Contacts", href: "#Contacts" },
    { title: "Our location", href: "#Our" },
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

  return (
    <div className="font-[18px] text-[#0b0c0c] mt-5 px-6">
      <PageHeader
        title="Contact us"
        published="PUBLISHED: 15 SEPTEMBER 2023"
        readTime="1 MINUTE READ"
      />
      <div className="mx-auto grid md:grid-cols-3 gap-5">
        {/* Main Content */}
        <main className="md:col-span-2">
          <Section title="Enquiries" id="enquiries">
            <LinkWithIcon
              title="Contact us via our online form"
              href="/about"
            />
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If your prefer, please email us directly at{" "}
              <TextLink
                link={{
                  title: "enquiries@frc.org.u",
                  href: "enquiries@frc.org.uk",
                }}
              />
            </p>
          </Section>

          <Section title="Complaints" id="complaints">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If your enquiry is regarding making a complaint please fill in our{" "}
              <TextLink
                link={{ title: "online form", href: "enquiries@frc.org.uk" }}
              />{" "}
              .
            </p>

            <ul className="list-disc mx-10 my-5">
              <li>
                <TextLink
                  link={{
                    title: "enquiries@frc.org.u",
                    href: "complaints@frc.org.uk",
                  }}
                />
              </li>
              <li>+44 (0)20 7492 2497</li>
            </ul>

            <LinkWithIcon title="Read our complaints processes" href="/about" />
          </Section>

          <Section title="Speaker request" id='Speaker'>
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If you would like someone from the FRC to speak at an event you
              are planning, please complete our{" "}
              <TextLink
                link={{
                  title: "speaker request form.",
                  href: "https://forms.office.com/e/chncK3ur6R",
                }}
              />{" "}
              Your submission will then be reviewed by our Stakeholder
              Engagement and Corporate Affairs team, who will be able to confirm
              availability and suitability of your request. If you have any
              questions on this process, please contact{" "}
              <TextLink
                link={{
                  title: "stakeholderengagement@frc.org.uk",
                  href: "mailto:stakeholderengagement@frc.org.uk",
                }}
              />{" "}
              .
            </p>
          </Section>

          <Section title="Contacts" id='Contacts'>
            <TextLink
              link={{
                title: "frccommunications@frc.org.uk",
                href: "mailto:stakeholderengagement@frc.org.uk",
              }}
            />
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              The Communications Team is available to journalists at any time by
              phone or email. Our contact details are below. If you are not a
              journalist please call our switchboard on +44 (0)20 7492 2300. It
              is open during normal office hours.
            </p>
            <ul className="list-disc mx-10 my-5">
              <li>
                Kate O’Neill, Director of Stakeholder Engagement and Corporate
                Affairs
              </li>
              <li>Adam Mohamed, Head of Communications</li>
              <li>William Boyack, Senior Communications Manager</li>
            </ul>
          </Section>

          <Section title="Investors" id='Investors'>
            <TextLink
              link={{
                title: "frccommunications@frc.org.uk",
                href: "mailto:stakeholderengagement@frc.org.uk",
              }}
            />
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              Find out what we do and how you can get involved. We're always
              happy to talk so please get in touch.
            </p>
            <ul className="list-disc mx-10 my-5">
              <li>Emily Duncan, Head of Stakeholder Engagement</li>
              <li>David Young, Stakeholder Engagement Manager</li>
            </ul>
          </Section>
          <Section title="Public Affairs" id='Public'>
            <TextLink
              link={{
                title: "frccommunications@frc.org.uk",
                href: "mailto:stakeholderengagement@frc.org.uk",
              }}
            />
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              If you are a parliamentarian, policy-maker or broader stakeholder
              and would like to know more about the FRC’s work, please contact
              us.
            </p>
            <ul className="list-disc mx-10 my-5">
              <li>Daniel Ellis, Senior Public Affairs Manager</li>
            </ul>
          </Section>
          <Section title="Levy and Funding">
            <p className="my-[18px] leading-[25.2px] text-[18px]">
              We publish all our{" "}
              <TextLink
                link={{
                  title: "funding and levy information.",
                  href: "/about-us/funding/",
                }}
              />
              If you have any questions, please get in touch.
            </p>

            <ul className="list-disc mx-10 my-5">
              <li>+44 (01273) 764 511</li>

              <li>
                <TextLink
                  link={{
                    title: "frc@adetiq.co.uk",
                    href: "mailto:frc@adetiq.co.uk",
                  }}
                />
              </li>
            </ul>
          </Section>

          <Section title="Our location" id='Our'>
            <h2 className="text-[31.5px] tracking-[-0.9px]">London office</h2>
            <ul className=" my-6">
              <li>13th Floor</li>
              <li>1 Harbour Exchange Square</li>
              <li>London</li>
              <li>E14 9GE</li>
            </ul>
            <TextLink
              link={{
                title: "Google map directions to London office",
                href: "https://maps.app.goo.gl/e6xsqDrf7Q49qnTk7",
              }}
            />
            <ul className="list-disc mx-10 my-5">
              <li>+44 (0)20 7492 2300</li>
              <li>+44 (0)20 7492 2301</li>

              <li>
                <TextLink
                  link={{
                    title: "enquiries@frc.org.uk",
                    href: "mailto:frc@adetiq.co.uk",
                  }}
                />
              </li>
            </ul>

            <h2 className="text-[31.5px] tracking-[-0.9px]">
              Birmingham office
            </h2>
            <ul className=" my-6">
              5th Floor
              <li>5th Floor</li>
              <li>Bridge Street</li>
              <li>Birmingham</li>
              <li>B1 2AX</li>
            </ul>
            <TextLink
              link={{
                title: "Google map directions to Birmingham office",
                href: "https://maps.app.goo.gl/e6xsqDrf7Q49qnTk7",
              }}
            />
            <ul className="list-disc mx-10 my-5">
              <li>+44 (0)20 7492 2300</li>
              <li>+44 (0)20 7492 2301</li>

              <li>
                <TextLink
                  link={{
                    title: "enquiries@frc.org.uk",
                    href: "mailto:frc@adetiq.co.uk",
                  }}
                />
              </li>
            </ul>
          </Section>
        </main>

        <Sidebar
          sidebarLinks={sidebarLinks}
          showBackToTop={showBackToTop}
          scrollToTop={scrollToTop}
        >
          <div className="mt-2">
            <LinkWithIcon href={SLUGS.contactform} title="Contact us form" />
          </div>
        </Sidebar>
      </div>
      <Feedback />
    </div>
  );
}
