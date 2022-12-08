import Link from "next/link";
import Moon from "./icons/moon.svg";
import Sun from "./icons/sun.svg";
import { StyledNavigation, StyledThemeSwitcher } from "./styles";

const ThemeSwitcher = ({ theme, setTheme }: any) => {
  const toggleTheme = () => {
    if (document !== undefined) {
      const root: HTMLElement = document.documentElement;
      if (theme === "dark") {
        root.style.setProperty("--primary", "var(--light)");
        root.style.setProperty("--primary-tint", "var(--light-tint)");
        root.style.setProperty(
          "--primary-transparent",
          "var(--white-transparent)",
        );

        root.style.setProperty("--secondary", "var(--dark)");
        root.style.setProperty("--secondary-tint", "var(--dark-tint)");
        root.style.setProperty(
          "--secondary-transparent",
          "var(--black-transparent)",
        );
        setTheme("light");
      } else if (theme === "light") {
        root.style.removeProperty("--primary");
        root.style.removeProperty("--primary-tint");
        root.style.removeProperty("--primary-transparent");

        root.style.removeProperty("--secondary");
        root.style.removeProperty("--secondary-tint");
        root.style.removeProperty("--secondary-transparent");
        setTheme("dark");
      }
    }
  };

  return (
    <StyledThemeSwitcher onClick={() => toggleTheme()}>
      <Moon className={theme === "dark" ? "active" : undefined} />
      <Sun className={theme === "light" ? "active" : undefined} />
    </StyledThemeSwitcher>
  );
};

const Navigation = (theme: any) => {
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
          <ThemeSwitcher {...theme} />
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
