import { ReactElement } from "react";

import LoginForm from "./../../organisms/LoginForm";
import Footer from "../../organisms/Footer";

import getClassnames from "./Login.style";

interface LoginProps {
  className?: string;
}

function Login({ className }: LoginProps): ReactElement {
  return (
    <div className={getClassnames(className)}>
      <div className="flex-1 flex justify-center items-center w-full">
        <LoginForm className="w-full max-w-md" />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
