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
        <Link as="a" href="/">
          Daniel Arfwedson
        </Link>
        <ul>
          {links.map(({ href, label }, i) => {
            console.log({ href });
            return (
              <li key={href} className={clsx(asPath === href && "active")}>
                <Link as="a" href={href}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
