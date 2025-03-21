import Hero from "./components/Home/heroSection";
import NewsSection from "./components/Home/NewsSection";
import StandardsSection from "./components/Home/StandardsSection";
import CareersSection from "./components/Home/careersSection";

export default function Home() {
  return (
    <div>
       <Hero />  
       <NewsSection />  
       <StandardsSection/>
       <CareersSection/>
    </div>
  );
}
