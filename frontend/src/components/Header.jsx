import { useLocation } from "react-router-dom";
import { User, ChevronDown, Menu } from "lucide-react";

export default function Header({ onOpenSidebar }) {
  const location = useLocation();

  const path = location.pathname.split("/").pop();
  let title = "Home";
  if (path) {
    title = path.charAt(0).toUpperCase() + path.slice(1);
  }

  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-8 text-white relative">
      <div className="flex items-center gap-3">
        <button onClick={onOpenSidebar} className="md:hidden text-zinc-300 hover:text-white">
          <Menu size={24} />
        </button>
        {/* On mobile, usually the logo pushes to center, but we can just show the title for now or show logo based on design. The screenshot shows tallvue logo in center. */}
        <h1 className="text-[22px] font-bold text-zinc-300 tracking-wide hidden md:block">{title}</h1>
        <div className="md:hidden flex items-center gap-1 text-[#F37254] font-semibold text-xl tracking-tight ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F37254]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col ml-1">
              <span className="leading-none tracking-wider">Tallvue</span>
            </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-zinc-300 cursor-pointer hover:text-white pr-1">
        <User size={16} />
        <span className="font-medium">Sam</span>
        <ChevronDown size={14} className="text-zinc-500" />
      </div>
    </header>
  );
}
