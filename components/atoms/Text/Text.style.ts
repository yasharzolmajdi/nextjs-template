import styles from "./Text.module.scss";
import TextType from "./TextType.enum";

const style: Record<keyof typeof TextType, string> = {
  title1: styles.title1,
  title2: styles.title2,
  title3: styles.title3,
  large: styles.large,
  regular: styles.regular,
  small: styles.small,
  micro1: styles.micro1,
};

export default style;
