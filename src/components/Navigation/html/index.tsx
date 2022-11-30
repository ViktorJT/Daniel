import Link from "next/link";
import { useState } from "react";
import Moon from "../icons/moon.svg";
import Sun from "../icons/sun.svg";
import { StyledNavigation, StyledThemeSwitcher } from "./styles";

const ThemeSwitcher = () => {
  const [active, setActive] = useState("dark");

  const toggleTheme = () => {
    if (document !== undefined) {
      const root: HTMLElement = document.documentElement;
      if (active === "dark") {
        root.style.setProperty("--primary", "var(--light)");
        root.style.setProperty("--primary-tint", "var(--light-tint)");
        root.style.setProperty("--primary-transparent", "var(--white-transparent)");
        
        root.style.setProperty("--secondary", "var(--dark)");
        root.style.setProperty("--secondary-tint", "var(--dark-tint)");
        root.style.setProperty("--secondary-transparent", "var(--black-transparent)");
        setActive('light');
      } else if (active === "light") {
        root.style.removeProperty("--primary");
        root.style.removeProperty("--primary-tint");
        root.style.removeProperty("--primary-transparent");
        
        root.style.removeProperty("--secondary");
        root.style.removeProperty("--secondary-tint");
        root.style.removeProperty("--secondary-transparent");
        setActive('dark');
      }
    }
  };

  return (
    <StyledThemeSwitcher onClick={() => toggleTheme()}>
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
