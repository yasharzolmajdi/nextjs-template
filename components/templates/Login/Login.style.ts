import classnames from "classnames";

import styles from "./Login.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.login, className);
}
