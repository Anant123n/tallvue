import React from 'react';

export default function MeditatePage() {
  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto rounded-[20px] bg-[#221D1B] px-6 py-10 lg:p-12 xl:p-16">
      
      {/* Top Heading Section */}
      <div className="mb-10 w-full lg:mb-16">
        <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F2EBE9] md:text-[56px] lg:text-[70px]">
          Guided meditations <br />
          tailored for you
        </h1>
      </div>

      {/* Bottom Content Section */}
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
              Receive email notifications when the website goes live - Be the first to experience Meditation.
            </p>
          </div>

          <button className="w-fit rounded-full bg-[#FE6847] px-8 py-3.5 font-['Work_Sans',_sans-serif] text-[16px] font-medium tracking-[0.01em] text-[#642D20] transition-transform hover:scale-105 active:scale-95">
            Notify Me
          </button>
        </div>

        {/* Right Column: Feature Cards 
            Align cards to the right to create the staggered effect
        */}
        <div className="flex flex-1 w-full flex-col items-end gap-4 lg:gap-6">
          
          {/* Card 1 
              Set width to w-[90%] so it starts further to the right 
          */}
          <div className="relative isolate flex w-[90%] flex-row items-center gap-6 overflow-hidden rounded-[32px] bg-[#221D1B] border border-white/5 px-6 py-6 lg:px-8 lg:py-8">
            {/* Ambient Background Blur - Teal for Meditate */}
            <div className="absolute left-[15%] -top-[50px] -z-10 h-[150px] w-[150px] rounded-full bg-[#A7CFCB] opacity-20 blur-[40px]"></div>
            
            <div className="w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[64px] font-extrabold leading-[1] text-[#A7CFCB] opacity-30 lg:w-[80px] lg:text-[92px]">
              1.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]">
                Explore personalized meditation sessions
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#B6B0AF] lg:text-[14px]">
                Our system adapts to your needs, offering custom meditations for a focused and transformative experience.
              </p>
            </div>
          </div>

          {/* Card 2 
              Set width to w-full so it spans the whole space, sticking out on the left 
          */}
          <div className="relative isolate flex w-full flex-row items-center gap-6 overflow-hidden rounded-[32px] bg-[#405E5C] px-6 py-6 lg:px-8 lg:py-8">
            {/* Ambient Background Blur */}
            <div className="absolute right-0 top-0 -z-10 h-[150px] w-[150px] rounded-full bg-[#A7CFCB] opacity-20 blur-[40px]"></div>

            <div className="w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[64px] font-extrabold leading-[1] text-[#A7CFCB] opacity-30 lg:w-[80px] lg:text-[92px]">
              2.
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]">
                Discover AI-powered guided meditations
              </h3>
              <p className="font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#F2EBE9] lg:text-[14px]">
                Our tool helps you track your progress and gain insights to guide your meditation journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}