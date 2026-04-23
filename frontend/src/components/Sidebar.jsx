import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Sun, TrendingUp, Folder, Home, X, Activity, UserCog } from "lucide-react";
import meditateHomeIcon from "../assets/icons/meditate-home.png";
import meditateExploreIcon from "../assets/icons/meditate-explore.png";
import meditateUltradianIcon from "../assets/icons/meditate-ultradian.png";
import careHomeIcon from "../assets/icons/care-home.png";
import careHighlightsIcon from "../assets/icons/care-highlights.png";
import careTrendsIcon from "../assets/icons/care-trends.png";
import careResourcesIcon from "../assets/icons/care-resources.png";
import { getRouteSection } from "../utils/routeSection";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  
  const primaryLinks = [
    { label: "Dreams", to: "/dreams", isComingSoon: false },
    { label: "Arc", to: "/arc", isComingSoon: false },
    { label: "Journal", to: "/journal", isComingSoon: false },
    { 
      label: "Meditate", 
      to: "/meditate", 
      isComingSoon: true,
      subLinks: [
        { label: "Home", to: "/meditate", iconImage: meditateHomeIcon },
        { label: "Explore Meditations", to: "/meditate/explore", iconImage: meditateExploreIcon },
        { label: "Ultradian Rhythm", to: "/meditate/ultradian", iconImage: meditateUltradianIcon }
      ]
    },
    { 
      label: "Care", 
      to: "/care", 
      isComingSoon: true,
      subLinks: [
        { label: "Home", to: "/care", iconImage: careHomeIcon },
        { label: "Highlights", to: "/care/highlights", iconImage: careHighlightsIcon },
        { label: "Trends", to: "/care/trends", iconImage: careTrendsIcon },
        { label: "Resources", to: "/care/resources", iconImage: careResourcesIcon },
      ]
    },
  ];

  const [expandedMenu, setExpandedMenu] = useState(() => getRouteSection(location.pathname));

  useEffect(() => {
    setExpandedMenu(getRouteSection(location.pathname));
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 md:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed inset-0 z-30 flex w-full flex-col overflow-y-auto bg-[#171312] transition-transform duration-300 md:bottom-0 md:left-0 md:right-auto md:top-0 md:w-[280px] md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-8">
          <div className="flex h-[30px] w-[105px] shrink-0 items-center gap-1 cursor-pointer">
            <div className="flex flex-col relative select-none w-full h-full justify-end">
               <div className="flex items-end font-extrabold text-[#FE6847] text-[22px] tracking-tight leading-none" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                 <span className="relative z-10">Ta</span>
                 <div className="relative mx-[1.5px] mb-px h-[17px] w-[5px] bg-[#FE6847]">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[5px] border-l-[5px] border-l-transparent border-t-[#171312]"></div>
                 </div>
                 <div className="relative mx-[1.5px] mb-px flex h-[26px] w-[5px] justify-center bg-[#FE6847]">
                    <div className="absolute top-[-11px] flex w-[22px] justify-center">
                       <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] overflow-visible">
                          <path d="M 9.5 8 L 14.5 8 L 13.5 17 L 10.5 17 Z" fill="#FE6847" />
                          <line x1="10.5" y1="8" x2="9.5" y2="2.5" stroke="#FE6847" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="13.5" y1="8" x2="14.5" y2="2.5" stroke="#FE6847" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="9.5" y1="11" x2="3" y2="9" stroke="#FE6847" strokeWidth="3" strokeLinecap="round" />
                          <line x1="14.5" y1="11" x2="21" y2="9" stroke="#FE6847" strokeWidth="3" strokeLinecap="round" />
                          <line x1="10.5" y1="17.5" x2="13.5" y2="17.5" stroke="#171312" strokeWidth="1.5" />
                       </svg>
                    </div>
                 </div>
                 <span className="relative z-10 ml-[1.5px]">vue</span>
               </div>
               <div className="mt-px hidden self-end pr-[5px] text-[7px] font-bold tracking-[0.2em] text-[#F2EBE9] md:block">
                 DREAMS
               </div>
            </div>
            <ChevronDown size={16} strokeWidth={2.5} className="mb-[6px] hidden shrink-0 text-[#FE6847] md:block" />
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white md:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="mt-2 flex flex-col px-4">
          {primaryLinks.map((link) => {
            const isExpanded = expandedMenu === link.label;
            
            return (
              <div key={link.label} className="border-b border-white/5 pb-2 pt-2 last:border-b-0">
                <NavLink
                  to={link.subLinks ? link.subLinks[0].to : link.to}
                  onClick={(e) => {
                    if (link.subLinks) {
                      e.preventDefault();
                      setExpandedMenu(isExpanded ? null : link.label);
                    } else if (onClose) onClose();
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-[#F2EBE9] transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center">
                    <span className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold tracking-wide">{link.label}</span>
                    {link.isComingSoon && (
                      <span className="ml-3 rounded bg-[#FE6847] px-1.5 py-[2px] font-['Work_Sans'] text-[10px] font-bold uppercase tracking-widest text-[#3D1A12]">
                        Soon
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-[#B6B0AF]">
                    {isExpanded ? <X size={16} /> : <span className="text-[20px] font-light leading-none">+</span>}
                  </div>
                </NavLink>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-0.5">
                    {link.subLinks && link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.label}
                        to={sub.to}
                        end={sub.to === link.to}
                        onClick={() => onClose && onClose()}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                            isActive ? "bg-[#423C3A] text-[#F2EBE9]" : "text-[#8F8A88] hover:bg-white/5 hover:text-[#F2EBE9]"
                          }`
                        }
                      >
                        {sub.iconImage ? (
                          <img
                            src={sub.iconImage}
                            alt=""
                            className="h-[18px] w-[18px] shrink-0 object-contain"
                          />
                        ) : (
                          sub.icon && <sub.icon size={18} className="shrink-0" />
                        )}
                        <span className="font-['Work_Sans'] text-[15px] font-medium">{sub.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto px-4 pb-6 pt-4">
          <div>
              <span className="mx-auto mb-0 flex h-[31px] w-[220px] max-w-[710px] items-center justify-center gap-4 rounded-t-[20px] rounded-b-none bg-[#642D20] px-5 font-['Work_Sans'] text-[11px] font-medium tracking-wide text-[#FE9D84]">
                  Free Trial ends in 5d:3h:12m
              </span>
              <div className="cursor-pointer rounded-[20px] bg-[#221D1B] p-5 transition-colors hover:bg-[#2A2422]">
                  <div className="mb-1 flex items-center justify-between">
                      <h4 className="font-['Plus_Jakarta_Sans'] text-[16px] font-bold text-[#F2EBE9]">Start subscribing</h4>
                      <ChevronRight size={18} className="text-[#F2EBE9]" />
                  </div>
                  <p className="font-['Work_Sans'] text-[13px] leading-normal text-[#8F8A88]">
                      Explore our subscription plans to get full experience with the platform.
                  </p>
              </div>
          </div>
        </div>
      </aside>
    </>
  );
}