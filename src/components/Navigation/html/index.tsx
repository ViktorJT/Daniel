import Link from "next/link";

import { StyledNavigation } from "./styles";

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
          <button>click me</button>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
