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
        <li>
          <Link as="a" href="/about">
            Work
          </Link>
        </li>
        <li>
          <Link as="a" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link as="a" href="/about">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
