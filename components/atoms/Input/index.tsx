import { ReactElement, ChangeEvent, forwardRef, Ref } from "react";

import getClassnames from "./Input.style";

export interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  className?: string;
  autoComplete?: string;
}

function Input(
  { type = "text", className, ...otherProps }: InputProps,
  ref: Ref<HTMLInputElement>,
): ReactElement {
  return <input type={type} {...otherProps} className={getClassnames(className)} ref={ref} />;
}

export default forwardRef(Input);
