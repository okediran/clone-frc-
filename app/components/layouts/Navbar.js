"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import SLUGS from '../../utils/slug';
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const navLinks = [
    { name: "Library", href: "/library" },
    {
      name: "About the FRC",
      href: "#",
      isDropdown: true,
      subLinks: [
        { name: "About the FRC", href: SLUGS.about },
        { name: "Our Purpose", href: SLUGS.purpose },
        { name: "FRC Structure", href: SLUGS.structure },
        { name: "Role and Responsibilities", href: SLUGS.role },
        { name: "Reports, Plans and Budgets", href: SLUGS.reports },
        { name: "Policies and Procedures", href: SLUGS.policies },
        { name: "Governance Reporting", href: SLUGS.governance },
        { name: "Funding", href: SLUGS.funding },
        { name: "FRC Responses to External Consultations", href: SLUGS.responses },
        { name: "Tribunals", href: SLUGS.tribunals },
        { name: "The FRC's International Activity", href: SLUGS.international },
      ],
    },
    { name: "Consultations", href: "/consultations" },
    { name: "News and events", href: "/news-and-events" },
  ];

  return (
    <header className="w-full bg-white  z-10 ">
      <div className="flex items-center ">
        <div className="bg-[#3f7bac] w-[70%] pl-[1em] h-20 items-center hidden md:flex">
          <div className="flex gap-[20px] text-white items-center">
            {[{name:"Careers at the FRC", href:'/about-us/careers/'}, {name:"Contact us", href:'/contact-us'}].map((text) => (
              <a key={text.name} href={text.href} className="hover:underline text-[20.25px]">
                {text.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className=" relative bg-[#87b3f4] p-[1em] h-20 md:w-[30%] w-full flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 focus:outline-none bg-[#f3f2f1] w-full p-[10px] border-2 border-[#0b0c0c] "
          />
          <Icon  className="absolute right-4 w-10 h-9 cursor-pointer" icon="material-symbols:search-rounded" width="24" height="24" />
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="lg:flex items-center space-x-5 md:block">
          <Image
            src="https://www.frc.org.uk/static/images/frc-logo.b3966863da67.svg"
            alt="Financial Reporting Council Logo"
            width={150}
            height={150}
            className="md:w-[150px] h-auto w-[100px]"
          />
          <span className="text-[#0b0c0c] text-[15px] md:text-xl md:font-bold font-normal">Financial Reporting Council</span>
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X size={30} /> : <Menu size={50} />}
            </motion.div>
          </button>
        </div>
        <nav className="hidden md:flex space-x-6 text-[22.5px] font-[300]">
          {navLinks.map((link) => (
            <div key={link.name} className="">
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => setSubmenuOpen(submenuOpen === link.name ? null : link.name)}
                    className="flex items-center gap-1 hover:text-[#034996] hover:underline"
                  >
                    {link.name}
                    <ChevronDown className={`transition-transform ${submenuOpen === link.name ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  {submenuOpen === link.name && (
                    <div className="absolute left-0 mt-15 bg-white shadow-md  border-t-1  border-black z-30 w-[100%] font-[700] leading-12">
                      {link.subLinks.map((sub) => (
                        <a key={sub.name} href={sub.href} className="block px-4 py-2 hover:underline border-b-1 border-[#bbc6c3]">
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="hover:black hover:underline w-[100%]">
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col bg-white py-4 space-y-4 shadow-md pl-4"
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => setSubmenuOpen(submenuOpen === link.name ? null : link.name)}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
                  >
                    {link.name}
                    <ChevronDown className={`transition-transform ${submenuOpen === link.name ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  {submenuOpen === link.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.subLinks.map((sub) => (
                        <a key={sub.name} href={sub.href} className="block text-gray-700 hover:text-blue-500">
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="text-gray-700 hover:text-blue-500">
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </header>
  );
}
