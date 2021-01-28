import { ReactElement, forwardRef, Ref } from "react";
import { FormattedMessage } from "react-intl";

import TextType from "./TextType.type";
import getClassnames from "./Text.style";

interface TextProps {
  children: string;
  type?: TextType;
  className?: string;
  raw?: boolean;
}

function Text(
  { children, className, type = "regular", raw = false }: TextProps,
  ref: Ref<HTMLSpanElement>,
): ReactElement {
  return (
    <span className={getClassnames(className, type)} ref={ref}>
      {raw ? children : <FormattedMessage id={children} />}
    </span>
  );
}

export default forwardRef(Text);
