import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedPillarsText from "@/components/AnimatedPillarsText";
import AnimatedTimeline from "@/components/AnimatedTimeline";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface">
        {/* Hero Section with Background Image */}
        <div className="p-4 md:p-6 w-full h-screen min-h-[500px]">
          <div className="relative w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/about-hero-bg.png" 
                alt="About Celestia AI Background" 
                className="w-full h-full object-cover object-center" 
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-12 text-center pt-20">
              <h1 className="font-hanken text-[48px] md:text-[72px] lg:text-[96px] font-light leading-none tracking-tight text-white uppercase">
                ABOUT
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-24 pb-12 overflow-hidden">
          <AnimatedPillarsText />
        </div>
          
        {/* Animated Timeline Section */}
        <AnimatedTimeline />
      </main>
      <Footer />
    </>
  );
}
