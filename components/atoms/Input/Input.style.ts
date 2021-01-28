import classnames from "classnames";

import styles from "./Input.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.input, className);
}
