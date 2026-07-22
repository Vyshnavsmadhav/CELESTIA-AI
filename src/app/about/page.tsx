import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-section-padding-h bg-surface">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-hanken text-[48px] md:text-[72px] lg:text-[96px] font-light leading-none tracking-tight text-primary uppercase mb-12">
            ABOUT US
          </h1>
          <div className="max-w-3xl space-y-6">
            <p className="font-inter text-[18px] md:text-[24px] leading-relaxed text-on-surface-variant font-light">
              We are a team of engineers, researchers, and strategists dedicated to fundamentally changing how enterprises operate through bespoke AI solutions.
            </p>
            <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface-variant/80">
              At Celestia AI, we believe that off-the-shelf software forces businesses to adapt to the tool, rather than the tool adapting to the business. Our approach is different. We build custom AI systems from first principles, integrating deeply with your existing workflows to drive measurable margin improvements and operational velocity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
