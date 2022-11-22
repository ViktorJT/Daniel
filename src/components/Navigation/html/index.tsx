import Link from "next/link";
import Moon from '../icons/moon.svg';
import Sun from '../icons/sun.svg';
import { StyledNavigation, StyledThemeSwitcher } from "./styles";

const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcher>
      <Moon />
      <Sun />
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
