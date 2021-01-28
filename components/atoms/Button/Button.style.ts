import classnames from "classnames";

import styles from "./Button.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.button, className);
}
