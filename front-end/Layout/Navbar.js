import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, BeakerIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

function Navbar({ topic }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Darkmode
  const renderThemeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="fixed w-full z-50">
      <div className="flex justify-around py-5 bg-primary-900 text-white">
        <BeakerIcon className="w-4" />
        <Link href="/">
          <a className="text-3xl font-medium">តោះមើល</a>
        </Link>
        {renderThemeChange()}
      </div>
      <nav className="py-2 flex justify-center items-center bg-primary-100 overflow-auto md:overflow-hidden lg:overflow-hidden">
        {topic?.map((item, index) => {
          return (
            <Link href={`/topic/${item.slug}`} key={index}>
              <div className="border-r-2 cursor-pointer">
                <a className="uppercase text-black hover:text-accent hover:underline font-medium text-sm md:text-xl lg:text-xl px-5">
                  {item.name}
                </a>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
