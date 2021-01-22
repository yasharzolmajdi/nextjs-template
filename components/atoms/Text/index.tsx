import { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

import propTypeEnum from "./../../../helpers/propTypeEnum";
import TextType from "./TextType.enum";

function Text({ children, type }: InferProps<typeof Text.propTypes>): ReactElement {
  return (
    <span>
      {children} {type}
    </span>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: propTypeEnum(TextType),
  jump: PropTypes.bool,
};

Text.defaultProps = {
  type: "regular",
  jump: false,
};

export default Text;
