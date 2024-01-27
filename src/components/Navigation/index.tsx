import { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from "clsx";

import { StyledNavigation } from "./styles";

const Navigation = () => {
  const { asPath } = useRouter();

  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <StyledNavigation>
      <div>
        <Link href="/">Daniel Arfwedson</Link>
        <ul>
          {links.map(({ href, label }, i) => (
            <li key={href} className={clsx(asPath === href && "active")}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
