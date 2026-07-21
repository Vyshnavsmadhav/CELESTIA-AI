import React from "react";

export default function Domains() {
  return (
    <section className="px-6 md:px-section-padding-h py-section-padding-v max-w-container-max mx-auto hairline-t" id="problems">
      {/* YouTube Video Player */}
      <div className="w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-outline/10" style={{ paddingBottom: "56.25%" }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.youtube.com/embed/8GTcbBFb7yI?modestbranding=1&rel=0" 
          title="Our Story Video" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
