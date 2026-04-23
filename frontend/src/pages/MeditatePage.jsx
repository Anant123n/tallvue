import FeatureCard from "../components/FeatureCard";
import NotifyMePanel from "../components/NotifyMePanel";

export default function MeditatePage() {
  const cards = [
    {
      number: 1,
      title: "Explore personalized meditation sessions",
      description:
        "Our system adapts to your needs, offering custom meditations for a focused and transformative experience.",
      wrapperClassName:
        "relative isolate flex w-[90%] flex-row items-center gap-6 overflow-hidden rounded-[32px] border border-white/5 bg-[#221D1B] px-6 py-6 lg:px-8 lg:py-8",
      blur: {
        className:
          "absolute left-[15%] -top-[50px] -z-10 h-[150px] w-[150px] rounded-full bg-[#A7CFCB] opacity-20 blur-[40px]",
      },
      numberClassName:
        "w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',sans-serif] text-[64px] font-extrabold leading-[1] text-[#A7CFCB] opacity-30 lg:w-[80px] lg:text-[92px]",
      titleClassName:
        "font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]",
      descriptionClassName:
        "font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#B6B0AF] lg:text-[14px]",
    },
    {
      number: 2,
      title: "Discover AI-powered guided meditations",
      description:
        "Our tool helps you track your progress and gain insights to guide your meditation journey.",
      wrapperClassName:
        "relative isolate flex w-full flex-row items-center gap-6 overflow-hidden rounded-[32px] bg-[#405E5C] px-6 py-6 lg:px-8 lg:py-8",
      blur: {
        className:
          "absolute right-0 top-0 -z-10 h-[150px] w-[150px] rounded-full bg-[#A7CFCB] opacity-20 blur-[40px]",
      },
      numberClassName:
        "w-[60px] shrink-0 select-none font-['Plus_Jakarta_Sans',_sans-serif] text-[64px] font-extrabold leading-[1] text-[#A7CFCB] opacity-30 lg:w-[80px] lg:text-[92px]",
      titleClassName:
        "font-['Plus_Jakarta_Sans',_sans-serif] text-[20px] font-bold leading-[1.2] text-[#F2EBE9] lg:text-[28px]",
      descriptionClassName:
        "font-['Work_Sans',_sans-serif] text-[13px] leading-[1.5] tracking-[0.01em] text-[#F2EBE9] lg:text-[14px]",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto rounded-[20px] bg-[#221D1B] px-6 py-10 lg:p-12 xl:p-16">
      
      {/* Top Heading Section */}
      <div className="mb-10 w-full lg:mb-16">
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F2EBE9] md:text-[56px] lg:text-[70px]">
          Guided meditations <br />
          tailored for you
        </h1>
      </div>

      {/* Bottom Content Section */}
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
        
        <NotifyMePanel description="Receive email notifications when the website goes live - Be the first to experience Meditation." />

        {/* Right Column: Feature Cards 
            Align cards to the right to create the staggered effect
        */}
        <div className="flex flex-1 w-full flex-col items-end gap-4 lg:gap-6">
          
          {cards.map((card) => (
            <FeatureCard
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
              wrapperClassName={card.wrapperClassName}
              blur={card.blur}
              numberClassName={card.numberClassName}
              titleClassName={card.titleClassName}
              descriptionClassName={card.descriptionClassName}
            />
          ))}

        </div>
      </div>
    </div>
  );
}