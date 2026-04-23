export default function MeditatePage() {
  return (
    <div className="bg-[#1C1A1A] rounded-[24px] h-full flex flex-col lg:flex-row lg:items-center justify-between p-8 lg:p-14 gap-12 overflow-y-auto">
      
      {/* Left Column container (Text part) */}
      <div className="flex-1 flex flex-col justify-between h-full min-h-[360px] lg:max-w-[50%]">
        <h2 className="text-4xl lg:text-[54px] font-bold text-white leading-[1.1] tracking-tight">
          Guided meditations<br />tailored for you
        </h2>

        <div className="mt-12 lg:mt-auto max-w-[340px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <span className="text-[11px] font-semibold tracking-[0.15em] text-zinc-400">UPCOMING</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Notify Me When Live</h3>
          <p className="text-[13px] text-zinc-400 mb-8 leading-relaxed pr-8">
            Receive email notifications when the website goes live - Be the first to experience Meditation.
          </p>
          <button className="bg-[#FA6E50] hover:bg-[#ff7a5e] transition-colors text-[#1C1A1A] font-semibold text-sm px-6 py-2.5 rounded-full w-full md:w-auto">
            Notify Me
          </button>
        </div>
      </div>

      {/* Right Column container (Cards part) */}
      <div className="flex-1 w-full lg:max-w-[48%] flex flex-col gap-6">
        
        <div className="rounded-[20px] p-6 lg:p-8 flex flex-row gap-5 lg:gap-6 relative overflow-hidden bg-gradient-to-r from-[#2A1E1E]/80 to-[#1C1A1A]/80 w-full border border-black/10">
          <div className="text-6xl font-bold text-white/20 select-none font-sans flex text-center items-center h-full tracking-tighter">
            1.
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-[17px] font-bold text-white mb-2 leading-snug tracking-tight">
              Explore personalized meditation sessions
            </h4>
            <p className="text-[11.5px] text-white/70 leading-relaxed font-medium">
              Our system adapts to your needs, offering custom meditations for a focused and transformative experience.
            </p>
          </div>
        </div>

        <div className="rounded-[20px] p-6 lg:p-8 flex flex-row gap-5 lg:gap-6 relative overflow-hidden bg-gradient-to-r from-[#5B8277] to-[#3B544A] w-full border border-black/10">
          <div className="text-6xl font-bold text-white/20 select-none font-sans flex text-center items-center h-full tracking-tighter">
            2.
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-[17px] font-bold text-white mb-2 leading-snug tracking-tight">
              Discover AI-powered guided meditations
            </h4>
            <p className="text-[11.5px] text-white/70 leading-relaxed font-medium">
              Our tool helps you track your progress and gain insights to guide your meditation journey.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  );
}
