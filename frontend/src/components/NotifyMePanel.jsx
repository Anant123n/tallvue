export default function NotifyMePanel({ description }) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[40%] xl:w-[35%]">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-[30px] bg-[#FDECE8]"></div>
          <span className="font-['Work_Sans',sans-serif] text-[15px] font-medium uppercase tracking-[0.01em] text-[#B6B0AF]">
            Upcoming
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] capitalize text-[#F2EBE9] lg:text-[36px]">
          Notify Me When Live
        </h2>

        <p className="font-['Work_Sans',sans-serif] text-[16px] leading-[1.6] tracking-[0.01em] text-[#F2EBE9] lg:text-[18px]">
          {description}
        </p>
      </div>

      <button className="w-fit rounded-full bg-[#FE6847] px-8 py-3.5 font-['Work_Sans',sans-serif] text-[16px] font-medium tracking-[0.01em] text-[#642D20] transition-transform hover:scale-105 active:scale-95">
        Notify Me
      </button>
    </div>
  );
}
