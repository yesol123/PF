import type { ReactNode } from "react";
import "./ButtonLink.css";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
};

export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a className="buttonLink" href={href}>
      {children}
    </a>
  );
}
