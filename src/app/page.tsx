import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Domains from "@/components/Domains";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <>
      <Header hideUntilScroll={true} />
      <main>
        <Hero />
        <div className="relative z-10 bg-surface shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <StorySection />
          <Expertise />
          <Methodology />
          <Domains />
          <Philosophy />
        </div>
      </main>
      <Footer />
    </>
  );
}
