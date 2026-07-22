import React from "react";
import Smooth3DSlideshow from "./Smooth3DSlideshow";

export default function Expertise() {
  return (
    <section className="py-24 md:py-32 bg-surface relative z-10 border-b border-outline/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center w-full mb-24">
          <div className="text-left w-fit">
            <h2 className="reveal-text opacity-0 translate-y-8 font-hanken text-[24px] md:text-[32px] lg:text-[40px] font-light italic leading-[1.4] tracking-tight text-primary whitespace-nowrap">
              WE DON&apos;T JUST SOLVE THE PROBLEM;<br/>
              <span className="reveal-text opacity-0 translate-y-8 inline-block ml-6 md:ml-12 text-primary">WE ELIMINATE THE PROBLEM</span><br/>
              <span className="reveal-text opacity-0 translate-y-8 block mt-4 text-[16px] md:text-[20px] font-inter font-light not-italic text-on-surface-variant/70 text-right">
                - CELESTIA AI
              </span>
            </h2>
          </div>
        </div>

        <div className="w-full relative h-[450px] md:h-[600px] mb-32">
          <Smooth3DSlideshow 
            showTitle={false} 
            cardWidth={800} 
            cardHeight={500} 
            gap={10} 
            tilt={5} 
            sideTilt={5}
          />
        </div>
      </div>
    </section>
  );
}
