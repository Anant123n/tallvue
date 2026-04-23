import { ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import headerProfileIcon from "../assets/icons/header-profile.png";
import { getRouteSection } from "../utils/routeSection";

export default function Header({ onOpenSidebar }) {
  const location = useLocation();
  
  const pageTitle = getRouteSection(location.pathname) || "";

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between px-8 py-8 text-[#F2EBE9]">
      <div className="flex items-center gap-3">
        <button onClick={onOpenSidebar} className="text-[#B6B0AF] hover:text-[#F2EBE9] md:hidden">
          <Menu size={24} />
        </button>
        {/* Desktop Page Title */}
        <h1 className="hidden md:block font-['Plus_Jakarta_Sans'] text-[24px] font-bold leading-none text-[#B6B0AF]">
          {pageTitle}
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
        <img src={headerProfileIcon} alt="" className="h-[18px] w-[18px] object-contain" />
        <span className="font-['Work_Sans'] text-[15px] font-medium text-[#F2EBE9]">
          Sam
        </span>
        <ChevronDown size={16} className="text-[#B6B0AF]" />
      </div>
    </header>
  );
}