import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Sun, TrendingUp, Folder, Home, X, Activity, UserCog, LogOut } from "lucide-react";

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
        { label: "Home", to: "/meditate", icon: Home },
        { label: "Explore Meditations", to: "/meditate/explore", icon: UserCog },
        { label: "Ultradian Rhythm", to: "/meditate/ultradian", icon: Activity }
      ]
    },
    { 
      label: "Care", 
      to: "/care", 
      isComingSoon: true,
      subLinks: [
        { label: "Home", to: "/care", icon: Home },
        { label: "Highlights", to: "/care/highlights", icon: Sun },
        { label: "Trends", to: "/care/trends", icon: TrendingUp },
        { label: "Resources", to: "/care/resources", icon: Folder },
      ]
    },
  ];

  const [expandedMenu, setExpandedMenu] = useState(() => {
    if (location.pathname.startsWith("/meditate")) return "Meditate";
    if (location.pathname.startsWith("/care")) return "Care";
    if (location.pathname.startsWith("/dreams")) return "Dreams";
    if (location.pathname.startsWith("/arc")) return "Arc";
    if (location.pathname.startsWith("/journal")) return "Journal";
    return null;
  });

  // Auto-expand menus if we navigate directly to them, creating "exclusive" open states
  useEffect(() => {
    if (location.pathname.startsWith("/meditate")) setExpandedMenu("Meditate");
    else if (location.pathname.startsWith("/care")) setExpandedMenu("Care");
    else if (location.pathname.startsWith("/dreams")) setExpandedMenu("Dreams");
    else if (location.pathname.startsWith("/arc")) setExpandedMenu("Arc");
    else if (location.pathname.startsWith("/journal")) setExpandedMenu("Journal");
  }, [location.pathname]);

  const toggleMenu = (label) => {
    setExpandedMenu(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside 
        className={`fixed left-0 top-0 bottom-0 w-64 bg-[#141212] overflow-y-auto flex flex-col font-sans border-r border-[#2A2A2A] z-30 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Area */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <div className="flex items-center gap-1 text-[#F37254] font-semibold text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F37254]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col ml-1">
              <span className="leading-none tracking-wider">Tallvue</span>
              <span className="text-[0.55rem] text-[#F37254]/70 leading-none tracking-widest mt-0.5">DREAMS</span>
            </div>
            <ChevronDown size={14} className="ml-2 text-zinc-500 hidden md:block" />
          </div>
          
          {/* Mobile Close Button */}
          <button onClick={onClose} className="md:hidden text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className="mt-2 px-4 flex flex-col gap-1">
          {primaryLinks.map((link) => {
            const isExpanded = expandedMenu === link.label;
            
            return (
              <div key={link.label} className="border-b border-[#2A2A2A] last:border-b-0 pb-1 mb-1">
                {link.subLinks ? (
                  <NavLink
                    to={link.to}
                    onClick={(e) => {
                      if (isExpanded) {
                        e.preventDefault();
                        setExpandedMenu(null);
                      } else {
                        setExpandedMenu(link.label);
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-zinc-300 hover:text-white"
                  >
                    <div className="flex items-center">
                      <span className="font-semibold text-[15px]">{link.label}</span>
                      {link.isComingSoon && (
                        <span className="bg-[#FA6E50] text-[#1C1A1A] text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md ml-3">
                          Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {isExpanded ? (
                        <X size={15} className="text-zinc-400" />
                      ) : (
                        <div className="text-zinc-500 font-light text-[22px] leading-none mb-1">+</div>
                      )}
                    </div>
                  </NavLink>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={() => onClose && onClose()}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-zinc-300 hover:text-white"
                  >
                    <div className="flex items-center">
                      <span className="font-semibold text-[15px]">{link.label}</span>
                      {link.isComingSoon && (
                        <span className="bg-[#FA6E50] text-[#1C1A1A] text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md ml-3">
                          Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {isExpanded ? (
                        <X size={15} className="text-zinc-400" />
                      ) : (
                        <div className="text-zinc-500 font-light text-[22px] leading-none mb-1">+</div>
                      )}
                    </div>
                  </NavLink>
                )}

                {/* SubLinks */}
                {isExpanded && link.subLinks && (
                  <div className="flex flex-col gap-1 mt-1 mb-2">
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.label}
                        to={sub.to}
                        onClick={() => onClose && onClose()}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive ? "bg-[#363434] text-zinc-300" : "text-zinc-400 hover:text-zinc-300 hover:bg-[#1E1E1E]"
                          }`
                        }
                      >
                        {sub.icon && <sub.icon size={16} className="text-zinc-400" />}
                        <span className="font-medium text-[13px]">{sub.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto p-4">
          <div className="relative pt-3 pb-3">
              <span className="absolute -top-2 left-4 z-10 bg-[#7B3A2C] text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                  Free Trial ends in 5d:3h:12m
              </span>
              <div className="bg-[#242222] rounded-xl p-4 pt-6 border border-[#2F2C2C]">
                  <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-zinc-200 text-sm">Start subscribing</h4>
                      <ChevronRight size={16} className="text-zinc-400" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                      Explore our subscription plans to get full experience with the platform.
                  </p>
              </div>
          </div>
          
          <button className="mt-1 w-full flex items-center justify-center gap-2 bg-[#2B2929] hover:bg-[#323030] transition-colors py-3 rounded-xl border border-white/5">
              <LogOut size={16} className="text-zinc-300" />
              <span className="text-zinc-300 font-medium text-[13px]">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
