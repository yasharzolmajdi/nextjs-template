import { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

import propTypeEnum from "./../../../helpers/propTypeEnum";
import TextType from "./TextType.enum";
import TextStyle from "./Text.style";

function Text({ children, type }: InferProps<typeof Text.propTypes>): ReactElement {
  return <span className={TextStyle(type)}>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: propTypeEnum(TextType),
};

Text.defaultProps = {
  type: "regular",
};

export default Text;
