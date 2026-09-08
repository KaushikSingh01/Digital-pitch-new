import { Hero } from "@/components/sections/Hero";
import { ShowcaseSlider } from "@/components/sections/ShowcaseSlider";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { GrowthEcosystem } from "@/components/sections/GrowthEcosystem";
import { LocalSEO } from "@/components/sections/LocalSEO";
import { LocalRadar } from "@/components/sections/LocalRadar";
import { OurTechnology } from "@/components/sections/OurTechnology";
import { AIAgents } from "@/components/sections/AIAgents";
import { AIAutomation } from "@/components/sections/AIAutomation";
import { WebDev } from "@/components/sections/WebDev";
import { SEOSection } from "@/components/sections/SEOSection";
import { SeoPortfolio } from "@/components/sections/SeoPortfolio";
import { DomainHosting } from "@/components/sections/DomainHosting";
import { Process } from "@/components/sections/Process";
import { Leadership } from "@/components/sections/Leadership";
import { WhyUs } from "@/components/sections/WhyUs";
import { Packages } from "@/components/sections/Packages";
import { Reviews } from "@/components/sections/Reviews";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShowcaseSlider />
      <TrustBar />
      <LocalSEO />
      <Services />
      <GrowthEcosystem />
      <LocalRadar />
      <OurTechnology />
      <AIAgents />
      <AIAutomation />
      <WebDev />
      <SEOSection />
      <SeoPortfolio />
      <DomainHosting />
      <Process />
      <Leadership />
      <WhyUs />
      <Packages />
      <Reviews />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
