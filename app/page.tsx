import { Hero } from "@/components/sections/Hero";
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
import { DomainHosting } from "@/components/sections/DomainHosting";
import { Process } from "@/components/sections/Process";
import { Leadership } from "@/components/sections/Leadership";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyUs } from "@/components/sections/WhyUs";
import { Packages } from "@/components/sections/Packages";
import { ProofGallery } from "@/components/sections/ProofGallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <GrowthEcosystem />
      <LocalSEO />
      <LocalRadar />
      <OurTechnology />
      <AIAgents />
      <AIAutomation />
      <WebDev />
      <SEOSection />
      <DomainHosting />
      <Process />
      <Leadership />
      <CaseStudies />
      <WhyUs />
      <Packages />
      <ProofGallery />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
