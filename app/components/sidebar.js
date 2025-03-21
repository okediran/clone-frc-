import { Icon } from "@iconify/react";
import TextLink from "./textlink";

// Reusable Sidebar component
const Sidebar = ({ sidebarLinks, showBackToTop, scrollToTop, children }) => {
 
  
  return(
  <aside className="p-8 md:block">
    <h3 className="text-[22.75px] font-[700]">On this page</h3>
    <ul className="mt-2 space-y-2 font-[18px] leading-[27px] pl-4.5 list-disc">
      {sidebarLinks.map((link, index) => (
        <li key={index}>
          <TextLink key={index} link={link} />
        </li>
      ))}
    </ul>
   { children && <div className="border-t-3 border-[#f2f2f2] pt-[20px] mt-[20px]">
      <h3 className="text-[24.75px] font-[700] leading-[27.225px] mb-[40px] tracking-[-0.9px]">
        Related content
      </h3>
      {children}
    </div>}
    {showBackToTop && (
      <div className="sticky top-4">
        <button
          onClick={scrollToTop}
          className="text-[#03448b] font-[700] text-[14.625px] leading-[21.9375px] py-2 transition duration-300 flex hover:text-black underline cursor-pointer"
          aria-label="Back to top"
        >
          <Icon icon="solar:arrow-up-linear" width="24" height="24" /> Back to
          top
        </button>
      </div>
    )}
  </aside>
)};

export default Sidebar;
