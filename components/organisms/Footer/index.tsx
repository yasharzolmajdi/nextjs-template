import { ReactElement, memo } from "react";

import LangLinks from "./../../molecules/LangLinks";

function Footer(): ReactElement {
  return (
    <div className="w-full border-t border-gray-200 flex justify-center items-center h-16">
      <LangLinks className="w-full max-w-md" />
    </div>
  );
}

export default memo(Footer);
