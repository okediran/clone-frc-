import { Icon } from "@iconify/react";

export default function CareersSection() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[430px] ">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/Birmingham_Modern_building_Low_Re.webp"
          alt="Working at FRC"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Positioned on the Right */}
      <div className="relative h-full  z-10 md:w-2/3 lg:w-[60%] p-6 md:p-12 text-white ml-auto bg-black/75 ">
        <h1 className="md:text-[76.5px] text-[42px]  font-bold leading-tight">
          Working at the  FRC
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          The FRC currently has a range of vacancies from entry level to senior hires. 
          Find out more about working at the FRC.
        </p>
        <a href="#" className="mt-6  text-[22.5px] font-semibold hover:underline flex items-center">
          View all careers <Icon icon="prime:angle-right" width="34" height="34" />
        </a>
      </div>
    </div>
  );
}