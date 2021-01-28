import { ReactElement } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";

import Link from "../../atoms/Link";
import Text from "../../atoms/Text";
import locals from "../../../locals";
import getClassnames from "./LangLinks.style";
import styles from "./LangLinks.module.scss";

interface LangLinksProps {
  className?: string;
}

function LangLinks({ className }: LangLinksProps): ReactElement {
  const router = useRouter();
  const localeCode = (router.locale ?? router.defaultLocale) as string;

  return (
    <div className={getClassnames(className)}>
      {Object.entries(locals).map(([key, value]) => (
        <Link href="/" locale={key} key={key}>
          <Text
            type="small"
            className={classnames({ [styles.activeLink]: localeCode === key })}
            raw>
            {value.name}
          </Text>
        </Link>
      ))}
    </div>
  );
}

export default LangLinks;
