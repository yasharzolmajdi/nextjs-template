import classnames from "classnames";

import styles from "./Link.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.link, className);
}
