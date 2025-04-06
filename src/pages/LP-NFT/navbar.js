import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/navigation-menu";
// Navigation menu items data
const navItems = ["NFTs", "Gaming Assets", "Metaverse", "Team"];

const Footer = () => {

  return (
    <header className="flex justify-center w-full py-3 px-2 border-b border-[#ffffff33] bg-black text-white overflow-hidden">
      <div className="flex w-full max-w-[1024px] items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-[5.25px] cursor-pointer">
            <div className="w-7 h-7 relative">
              <img src="/assets/images/integrity_logo.svg" alt="Logo" className="w-full h-full scale-[1.2]" />
            </div>
            <div className="flex items-center justify-center py-[5.25px]">
              <span className="text-[24px]">
                Integrity
              </span>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-[2vw]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink className="inline-flex h-2 items-center justify-center px-[1] text-white text-[length:var(--button-font-size)] cursor-pointer">
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Documentation Button */}
        <button
          className="border-2 py-1 px-3 bg-[#00000012] rounded-[100px] border-[#ffffff33] text-white"
        >
          Documentation
        </button>
      </div>
    </header>
  );
};

export default Footer;