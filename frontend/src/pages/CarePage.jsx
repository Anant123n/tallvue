import React from 'react';

export default function CarePage() {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto rounded-[20px] bg-[#221D1B] px-6 py-10 lg:p-12 xl:p-16">
      
      {/* Top Heading Section */}
      <div className="mb-10 w-full lg:mb-16">
        <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F2EBE9] md:text-[56px] lg:text-[70px]">
          AI-powered <br />
          personal Counselor
        </h1>
      </div>

      {/* Bottom Content Section - using flex-1 and relative widths */}
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
        
        {/* Left Column: Notification Opt-in */}
        <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[40%] xl:w-[35%]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-[30px] bg-[#FDECE8]"></div>
              <span className="font-['Work_Sans',_sans-serif] text-[15px] font-medium uppercase tracking-[0.01em] text-[#B6B0AF]">
                Upcoming
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] capitalize text-[#F2EBE9] lg:text-[36px]">
              Notify Me When Live
            </h2>

            <p className="font-['Work_Sans',_sans-serif] text-[16px] leading-[1.6] tracking-[0.01em] text-[#F2EBE9] lg:text-[18px]">
              Receive email notifications when the feature goes live - Be the first to experience Care.
            </p>
          </div>

          <button className="w-fit rounded-full bg-[#FE6847] px-8 py-3.5 font-['Work_Sans',_sans-serif] text-[16px] font-medium tracking-[0.01em] text-[#642D20] transition-transform hover:scale-105 active:scale-95">
            Notify Me
          </button>
        </div>

        {/* Right Column: Feature Cards */}
        {/* flex-1 allows this column to take the remaining relative space seamlessly */}
        <div className="flex flex-1 w-full flex-col gap-4">
          
          {/* Card 1 */}
          <div className="relative isolate flex w-full flex-row items-center gap-6 overflow-hidden rounded-[32px] bg-[#221D1B] border border-white/5 px-6 py-6 lg:px-8 lg:py-8">
            {/* Ambient Background Blur - Warm Orange for Care */}
            <div className="absolute -left-[20px] -top-[50px] -z-10 h-[150px] w-[150px] rounded-full bg-[#FE6847] opacity-15 blur-[40px]"></div>
            
            <div className="w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[64px] font-extrabold leading-[1] text-[#A7CFCB] opacity-10 lg:w-[80px] lg:text-[92px]">
              1.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]">
                Find your AI-driven personal counselor
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#B6B0AF] lg:text-[14px]">
                Our AI adapts to your needs, providing personalized support for a balanced and healthy mind.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative isolate flex w-full flex-row items-center gap-6 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#946123] to-[#7A4B13] px-6 py-6 lg:px-8 lg:py-8">
            
            <div className="w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[64px] font-extrabold leading-[1] text-[#F2EBE9] opacity-20 lg:w-[80px] lg:text-[92px]">
              2.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]">
                Discover personalized mental health support
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#EBE5E4] lg:text-[14px]">
                Our system helps you gain insights and track progress, guiding you toward better mental well-being.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}