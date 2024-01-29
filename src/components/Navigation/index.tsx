import { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from "clsx";

import { StyledNavigation } from "./styles";

const Navigation = () => {
  const { asPath } = useRouter();

  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    {
      href: "mailto:daniel.arfwedson@icloud.com",
      label: "Contact",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <StyledNavigation>
      <div>
        <Link className="logo" href="/">
          Daniel Arfwedson
        </Link>
        <ul>
          {links.map(({ label, ...link }, i) => (
            <li
              key={link.href}
              className={clsx(asPath === link.href && "active")}
            >
              <Link {...link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
