import { ReactElement, forwardRef, Ref } from "react";

import getClassnames from "./Card.style";

interface CardProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

function Card({ className, children }: CardProps, ref: Ref<HTMLDivElement>): ReactElement {
  return (
    <div className={getClassnames(className)} ref={ref}>
      {children}
    </div>
  );
}

export default forwardRef(Card);
