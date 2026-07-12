import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Domains from "@/components/Domains";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <Hero />
        <Methodology />
        <Domains />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
