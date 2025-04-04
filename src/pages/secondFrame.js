import { ChevronRight, ExternalLink } from "lucide-react";
import React from "react";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/Card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

// Navigation menu items data
const navItems = ["NFTs", "Gaming Assets", "Metaverse", "Team"];

export default function Frame() {
  return (
    <div className="relative w-full min-h-[682px] bg-black text-white overflow-hidden">
      <header className="flex justify-center w-full py-5 px-2 border-b border-[#ffffff33]">
        <div className="flex w-full max-w-[1024px] items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-[5.25px]">
              <div className="w-7 h-7 relative">
                <img src="" alt="Logo" className="w-full h-full" />
              </div>
              <div className="flex items-center justify-center py-[5.25px]">
                <span className="font-semibold text-[21px] tracking-[-0.21px]">
                  Integrity
                </span>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[var(--sizes-buttons-spacing-between-buttons)]">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="inline-flex h-[var(--sizes-buttons-height)] items-center justify-center px-[var(--sizes-buttons-paddings-left-right)] py-0 font-button font-[number:var(--button-font-weight)] text-white text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Documentation Button */}
          <Button
            variant="outline"
            className="h-[var(--sizes-buttons-height)] px-[var(--sizes-buttons-paddings-left-right-for-rounded)] py-0 bg-[#00000012] rounded-[100px] border-[#ffffff33] backdrop-blur-[50px] text-white"
          >
            Documentation
          </Button>
        </div>
      </header>

      <main className="w-full flex justify-center px-4 py-[70px]">
        <div className="relative w-full max-w-[1082px] flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[653px] items-start gap-10 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <h1 className="max-w-[536px] [text-shadow:-1px_-1px_0px_#ffffff33] [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(190,190,190,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-headline-1 font-[number:var(--headline-1-font-weight)] text-[length:var(--headline-1-font-size)] tracking-[var(--headline-1-letter-spacing)] leading-[var(--headline-1-line-height)] [font-style:var(--headline-1-font-style)] shadow-title-shadow">
                Enable Metaverse Lands with Verifiable, Bitcoin-Based Resource
                Mechanics
              </h1>
              <p className="max-w-[569px] font-subheadline font-[number:var(--subheadline-font-weight)] text-[#0000004c] text-[length:var(--subheadline-font-size)] tracking-[var(--subheadline-letter-spacing)] leading-[var(--subheadline-line-height)] [font-style:var(--subheadline-font-style)]">
                Integrate real Bitcoin mining logic into your Metaverse Lands
                through a fully on-chain, hardware-free protocol trustless,
                automated, and ready for Web3 creators.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Button
                className="h-[var(--sizes-buttons-height)] px-[var(--sizes-buttons-paddings-left-right-for-rounded)] py-0 bg-white text-black rounded-[100px] font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]"
                data-sizes-mode="large"
              >
                Join the Waitlist
                <ChevronRight className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                className="h-[var(--sizes-buttons-height)] px-[var(--sizes-buttons-paddings-left-right-for-rounded)] py-0 text-[#0000004c] rounded-[100px] font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]"
                data-sizes-mode="large"
              >
                Try our dApp
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Card with Visual Elements */}
          <Card className="absolute md:relative w-[472px] h-[436px] top-0 right-0 md:left-auto rounded-3xl border border-solid border-[#111112] [background:linear-gradient(319deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_100%),linear-gradient(0deg,rgba(17,17,19,1)_0%,rgba(17,17,19,1)_100%)] bg-[color:var(--theme-colors-neutral-soft)]" />
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-[21px] left-[957px] rotate-[13.84deg] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] z-0" />
      <img
        className="absolute w-[394px] h-[218px] top-[432px] left-[901px] z-0"
        alt="Rectangle"
        src=""
      />
      <div className="absolute top-[352px] left-[982px] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] z-0" />
      <div className="absolute top-[197px] left-[982px] rotate-[-25.07deg] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] z-0" />
      <img
        className="absolute w-[170px] h-[78px] top-[552px] left-[754px] z-0"
        alt="Vector1"
        src=""
      />
      <img
        className="absolute w-[117px] h-[71px] top-[584px] left-[867px] z-0"
        alt="Vector2"
        src=""
      />
      <img
        className="absolute w-[238px] h-[38px] top-[445px] left-[1213px] z-0"
        alt="Vector3"
        src=""
      />
      <img
        className="absolute w-[162px] h-8 top-[491px] left-[1293px] z-0"
        alt="Vector4"
        src=""
      />
      <img
        className="absolute w-[82px] h-[90px] top-[316px] left-[862px] z-0"
        alt="Vector5"
        src=""
      />
      <img
        className="absolute w-[172px] h-[47px] top-[588px] left-[1273px] z-0"
        alt="Vector6"
        src=""
      />
    </div>
  );
}
