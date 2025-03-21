import React from "react";
import { Icon } from "@iconify/react";
import SLUGS from "../../utils/slug";

const Footer = () => {
  const links = [
    [
      { name: "Freedom of Information", link: SLUGS.freedom },
      { name: "Privacy", link: SLUGS.privacy },
      {
        name: "Individual Rights (Data Privacy) Policy",
        link: SLUGS.individual,
      },
      { name: "Modern Slavery Statement", link: SLUGS.modern },
      { name: "Disclaimer and Copyright", link: "#" },
    ],
    [
      { name: "Cookies", link: SLUGS.cookies },
      { name: "Accessibility Statement", link: "#" },
      { name: "Whistleblowing", link: "#" },
      { name: "Complaints", link: "#" },
      { name: "Regulators' Code", link: "#" },
    ],
  ];

  return (
    <footer className="bg-[#3f7bac] text-white">
      <div className="mx-auto grid-cols-1 md:flex gap-1 block">
        {/* Left Section - Links */}
        <div className="md:col-span-2 py-14 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((column, index) => (
              <ul key={index} className="list-disc pl-5">
                {column.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="hover:no-underline underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {/* Social Media Icons */}
          <div className="my-6 flex space-x-4 ml-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="pajamas:twitter" width="50" height="50" />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ri:vimeo-fill" width="50" height="50" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:linkedin" width="50" height="50" />
            </a>
          </div>
          {/* Legal Information */}
          <p>
            The Financial Reporting Council Limited is a company limited by
            guarantee. Registered in England number 2486368. Registered Office:
            13th Floor, 1 Harbour Exchange Square, London E14 9GE.
          </p>
        </div>
        {/* Right Section - Newsletter Signup */}
        <div className="bg-[#87b3f4] p-6 py-14 w-full md:w-[60%]">
          <h3 className="text-black text-[40.5px] font-[300]">
            Stay up to date
          </h3>
          <p className="text-black mt-2">
            Subscribe to our news alerts to receive our latest updates.
          </p>
          <a href={SLUGS.signup}>
            <button className="cursor-pointer mt-4 border-2 text-[20.25px] bg-[#034996] text-white py-[9px] px-[18px] border-[#fff] hover:bg-blue-900">
              Sign up to our news alerts
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
