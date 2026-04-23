import { ChevronDown, Menu, UserRound } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Header({ onOpenSidebar }) {
  const location = useLocation();
  
  // Determine page title based on route
  const getPageTitle = () => {
    if (location.pathname.startsWith("/meditate")) return "Meditate";
    if (location.pathname.startsWith("/care")) return "Care";
    if (location.pathname.startsWith("/dreams")) return "Dreams";
    if (location.pathname.startsWith("/arc")) return "Arc";
    if (location.pathname.startsWith("/journal")) return "Journal";
    return "";
  };

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between px-8 py-8 text-[#F2EBE9]">
      <div className="flex items-center gap-3">
        <button onClick={onOpenSidebar} className="text-[#B6B0AF] hover:text-[#F2EBE9] md:hidden">
          <Menu size={24} />
        </button>
        {/* Desktop Page Title */}
        <h1 className="hidden md:block font-['Plus_Jakarta_Sans'] text-[24px] font-bold leading-none text-[#B6B0AF]">
          {getPageTitle()}
        </h1>
        {/* Mobile Logo */}
        <div className="flex items-end gap-1 md:hidden">
          <div className="flex flex-col leading-none">
            <span className="font-['Plus_Jakarta_Sans'] text-[28px] font-extrabold tracking-[-0.02em] text-[#FE6847]">
              Tallvue
            </span>
            <span className="self-end pr-1 font-['Plus_Jakarta_Sans'] text-[8px] font-light uppercase tracking-[0.12em] text-[#F2EBE9]">
              Dreams
            </span>
          </div>
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80">
        <UserRound size={18} className="text-[#F2EBE9]" />
        <span className="font-['Work_Sans'] text-[15px] font-medium text-[#F2EBE9]">
          Sam
        </span>
        <ChevronDown size={16} className="text-[#B6B0AF]" />
      </div>
    </header>
  );
}