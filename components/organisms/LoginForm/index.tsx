import { ReactElement, memo } from "react";
import { useForm } from "react-hook-form";

import Card from "./../../atoms/Card";
import InputGroup from "./../../molecules/InputGroup";
import Button from "./../../atoms/Button";
import Text from "./../../atoms/Text";

interface LoginFormProps {
  className?: string;
}

function LoginForm({ className }: LoginFormProps): ReactElement {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={className}>
      <Text type="title1" className="block mb-4 capitalize">
        login
      </Text>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup
            ref={register}
            id="username"
            label="username"
            inputProps={{ autoComplete: "username" }}
          />
          <InputGroup
            ref={register}
            id="password"
            label="password"
            inputProps={{ type: "password", autoComplete: "current-password" }}
          />
          <Button type="submit">
            <Text className="capitalize">login</Text>
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default memo(LoginForm);
