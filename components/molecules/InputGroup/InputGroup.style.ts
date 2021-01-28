import classnames from "classnames";

import styles from "./InputGroup.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.inputGroup, className);
}
