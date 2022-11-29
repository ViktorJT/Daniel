import Link from "next/link";
import { useState } from "react";
import Moon from "../icons/moon.svg";
import Sun from "../icons/sun.svg";
import { StyledNavigation, StyledThemeSwitcher } from "./styles";

const ThemeSwitcher = () => {
  const [active, setActive] = useState("dark");

  const toggleTheme = () => {
    if (document !== undefined) {
      const root: any = document.querySelector(":root");
      
      if (active === "dark") {
        root.style.setProperty("--primary", "--light");
        root.style.setProperty("--primary-tint", "--white");
        root.style.setProperty("--primary-transparent", "--white-transparent");
        
        root.style.setProperty("--secondary", "--dark");
        root.style.setProperty("--secondary-tint", "--black");
        root.style.setProperty("--secondary-transparent", "--black-transparent");
        setActive('light');
      } 
      
      if (active === "light") {
        root.style.setProperty("--primary", "--dark");
        root.style.setProperty("--primary-tint", "--black");
        root.style.setProperty("--primary-transparent", "--dark-transparent");
        
        root.style.setProperty("--secondary", "--light");
        root.style.setProperty("--secondary-tint", "--white");
        root.style.setProperty("--secondary-transparent", "--white-transparent");
        setActive('dark');
      }
    }
  };

  return (
    <StyledThemeSwitcher  onClick={() => toggleTheme()}>
      <Moon className={active === "dark" ? "active" : undefined} />
      <Sun className={active === "light" ? "active" : undefined} />
    </StyledThemeSwitcher>
  );
};

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li className="home">
          <Link href="/">Daniel Arfwedson</Link>
        </li>
        <li className="about">
          <Link href="/about">About</Link>
        </li>
        <li className="theme">
          <ThemeSwitcher />
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
