import Experience from "@/components/portfolio/Experience";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Footer from "@/components/portfolio/Footer";
import FloatingNav from "@/components/portfolio/FloatingNav";
import Bio from "@/components/portfolio/Bio";
import Certifications from "@/components/portfolio/Certifications";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <FloatingNav />
      <main>
        <Hero />
        <Bio />
        <Experience />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
