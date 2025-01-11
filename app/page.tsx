import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Nav from "@/components/Nav";
import WorkSection from "@/components/Worlk";

export default function Home() {
  return (
    <main className="space-y-10 my-10">
      <Nav />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
