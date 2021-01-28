import classnames from "classnames";

import styles from "./LangLinks.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.langLinks, className);
}
