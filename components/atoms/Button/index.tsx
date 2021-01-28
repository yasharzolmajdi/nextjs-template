import { ReactElement, MouseEvent, forwardRef, Ref } from "react";

import getClassnames from "./Button.style";

interface ButtonProps {
  children: string | ReactElement;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "reset" | "submit";
}

function Button(
  { children, onClick, className, type = "button" }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
): ReactElement {
  return (
    <button type={type} onClick={onClick} className={getClassnames(className)} ref={ref}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
