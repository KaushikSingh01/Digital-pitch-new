import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { GrowthEcosystem } from "@/components/sections/GrowthEcosystem";
import { AIAgents } from "@/components/sections/AIAgents";
import { AIAutomation } from "@/components/sections/AIAutomation";
import { LocalSEO } from "@/components/sections/LocalSEO";
import { WebDev } from "@/components/sections/WebDev";
import { SEOSection } from "@/components/sections/SEOSection";
import { DomainHosting } from "@/components/sections/DomainHosting";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <GrowthEcosystem />
      <AIAgents />
      <AIAutomation />
      <LocalSEO />
      <WebDev />
      <SEOSection />
      <DomainHosting />
      <Process />
      <Portfolio />
      <WhyUs />
      <Packages />
      <Testimonials />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
