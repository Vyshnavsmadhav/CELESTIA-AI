import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Domains from "@/components/Domains";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import Expertise from "@/components/Expertise";
import GlobalTextReveal from "@/components/GlobalTextReveal";

export default function Home() {
  return (
    <>
      <GlobalTextReveal />
      <Header hideUntilScroll={true} />
      <main>
        <Hero />
        <div className="relative z-10">
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
