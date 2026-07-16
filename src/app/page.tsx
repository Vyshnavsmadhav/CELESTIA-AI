import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Domains from "@/components/Domains";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header hideUntilScroll={true} />
      <main>
        <Hero />
        <Methodology />
        <Domains />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
