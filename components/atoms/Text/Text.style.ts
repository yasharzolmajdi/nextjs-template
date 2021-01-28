import classnames from "classnames";

import styles from "./Text.module.scss";
import TextType from "./TextType.type";

const typeClasses: Record<TextType, string> = {
  title1: styles.title1,
  title2: styles.title2,
  title3: styles.title3,
  large: styles.large,
  regular: styles.regular,
  small: styles.small,
  micro1: styles.micro1,
};

export default function getClassnames(className: string, type: TextType): string {
  return classnames(styles.text, typeClasses[type], className);
}
