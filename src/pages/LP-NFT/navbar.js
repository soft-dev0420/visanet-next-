import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/navigation-menu";

const navItems = ["NFTs", "Gaming Assets", "Metaverse", "Team"];

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     <header className="flex justify-center w-full border-b border-[#ffffff33] bg-black text-white overflow-hidden">
      <div className="flex w-full max-w-[1024px] h-[72px] items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-[7px] cursor-pointer">
            <div className="w-7 h-7 relative">
              <img
                src="/assets/images/integrity_logo.svg"
                alt="Logo"
                className="w-full h-full scale-[1.1]"
              />
            </div>
            <div className="flex items-center justify-center py-[5.25px]">
              <span className="text-[21px]">Integrity</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="hidden sm:flex gap-[2vw]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink className="inline-flex h-2 items-center justify-center px-1 text-white text-[length:var(--button-font-size)] cursor-pointer">
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Documentation Button */}
        <button className="border-2 py-1 px-3 bg-[#00000012] rounded-[100px] border-[#ffffff33] text-white text-[14px]">
          Documentation
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      
    </header>
    {isMenuOpen && (
      <div className="sm:hidden absolute w-full px-4 pb-4 z-50">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-2 bg-gray-500 rounded-md p-4 mt-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink className="block text-white px-2 py-1 hover:text-gray-100 text-sm border-b border-[#ffffff22] last:border-b-0">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    )}
    </>
  );
};

export default Footer;
