import Link from "next/link";
import Moon from "./icons/moon.svg";
import Sun from "./icons/sun.svg";
import { StyledNavigation } from "./styles";

const Navigation = (theme: any) => {
  return (
    <StyledNavigation>
      <Link as="a" href="/">
        Daniel Arfwedson
      </Link>
      <ul>
        <li className="about">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
