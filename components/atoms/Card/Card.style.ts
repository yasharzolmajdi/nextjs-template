import classnames from "classnames";

import styles from "./Card.module.scss";

export default function getClassnames(className: string): string {
  return classnames(styles.card, className);
}
