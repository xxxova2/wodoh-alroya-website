import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServicesGrid />
      <FeaturedProjects />
      <ClientLogos />
      <CTASection />
    </>
  );
}
