import { ReactElement, forwardRef, Ref } from "react";

import styles from "./InputGroup.module.scss";
import Input, { InputProps } from "../../atoms/Input";
import Text from "../../atoms/Text";
import getClassnames from "./InputGroup.style";

interface InputGroupProps {
  inputProps?: InputProps;
  id: string;
  name?: string;
  label: string;
  className?: string;
}

function InputGroup(
  { inputProps, label, id, name, className }: InputGroupProps,
  ref: Ref<HTMLInputElement>,
): ReactElement {
  return (
    <div className={getClassnames(className)}>
      <label htmlFor={id}>
        <Text className={styles.inputGroupText}>{label}</Text>
      </label>
      <Input {...inputProps} id={id} name={name ?? id} ref={ref} />
    </div>
  );
}

export default forwardRef(InputGroup);
