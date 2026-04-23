import React from 'react';

export default function CarePage() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-y-auto rounded-[24px] bg-[#1E1C1A] p-8 md:p-10 lg:p-12 xl:p-16">
      
      {/* Top Heading Section */}
      <div className="mb-8 mt-2">
        <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[44px] font-bold leading-[1.05] tracking-tight text-[#F2EBE9] lg:text-[56px] xl:text-[68px]">
          AI-powered <br />
          personal Counselor
        </h1>
      </div>

      {/* Flexible Spacer to push bottom content down naturally */}
      <div className="min-h-[40px] flex-1"></div>

      {/* Bottom Content Section - Fluid Percentages */}
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        
        {/* Left Column: Notification Opt-in */}
        <div className="flex w-full flex-col gap-6 pb-2 lg:w-[38%] xl:w-[35%] xl:pb-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-[8px] w-[8px] rounded-full bg-[#E0D8D6]"></div>
              <span className="font-['Work_Sans',_sans-serif] text-[12px] font-semibold uppercase tracking-[0.15em] text-[#B6B0AF]">
                Upcoming
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[28px] font-bold tracking-tight text-[#F2EBE9] lg:text-[32px] xl:text-[36px]">
              Notify Me When Live
            </h2>

            <p className="font-['Work_Sans',_sans-serif] text-[14px] leading-[1.6] text-[#B6B0AF] xl:text-[15px]">
              Receive email notifications when the feature goes<br className="hidden xl:block" />
              live - Be the first to experience Care.
            </p>
          </div>

          <button className="w-fit rounded-full bg-[#FE6847] px-8 py-3.5 font-['Work_Sans',_sans-serif] text-[14px] font-bold text-[#1C1A1A] transition-transform hover:scale-105 active:scale-95 xl:text-[15px]">
            Notify Me
          </button>
        </div>

        {/* Right Column: Feature Cards */}
        <div className="flex w-full flex-col gap-5 lg:w-[58%] xl:w-[60%]">
          
          {/* Card 1 */}
          <div className="relative isolate flex flex-row items-center gap-6 overflow-hidden rounded-[24px] border border-white/5 bg-[#2A211F] p-8 lg:p-8 xl:p-10">
            {/* Soft Warm Glow */}
            <div className="absolute left-[15%] top-[-20%] -z-10 h-40 w-40 rounded-full bg-[#FE6847] opacity-15 blur-[50px]"></div>
            
            <div className="w-[64px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[72px] font-extrabold leading-[0.8] tracking-tighter text-white/5 xl:w-[72px] xl:text-[88px]">
              1.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[18px] font-bold leading-snug text-[#F2EBE9] xl:text-[22px]">
                Find your AI-driven personal counselor
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-relaxed text-[#A39E9D] xl:text-[14.5px]">
                Our AI adapts to your needs, providing personalized support for a balanced and healthy mind.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative isolate flex flex-row items-center gap-6 overflow-hidden rounded-[24px] bg-gradient-to-r from-[#A56D1F] to-[#794A13] p-8 lg:p-8 xl:p-10">
            
            <div className="w-[64px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[72px] font-extrabold leading-[0.8] tracking-tighter text-white/20 xl:w-[72px] xl:text-[88px]">
              2.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[18px] font-bold leading-snug text-[#F2EBE9] xl:text-[22px]">
                Discover personalized mental health support
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-relaxed text-[#EBE5E4] xl:text-[14.5px]">
                Our system helps you gain insights and track progress, guiding you toward better mental well-being.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}