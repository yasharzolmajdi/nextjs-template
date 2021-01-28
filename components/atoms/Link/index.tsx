import { ReactElement } from "react";
import NextLink from "next/link";

import getClassnames from "./Link.style";

interface LinkProps {
  children: string | ReactElement;
  href: string;
  locale?: string;
  className?: string;
}

function Link({ children, href, locale, className }: LinkProps): ReactElement {
  return (
    <NextLink href={href} locale={locale}>
      <a className={getClassnames(className)}>{children}</a>
    </NextLink>
  );
}

export default Link;
