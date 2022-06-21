import { Card, CardBody } from "../../molecules/card/index";
import { Input } from "../../atoms/input/index";
import { Button } from "../../atoms/button";
import Icon from "../../atoms/icons/icon";

export interface LoginProps {
}

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card shadow className="card-login bg-theme-white">
        <CardBody className="py-14 px-20 flex flex-col h-full">
          <div className="flex-grow">
            <div className="pb-8 text-theme-neutral10">
              <div className="flex justify-center pb-4">
                <Icon kind="hexagon" size={65} className="text-theme-neutral65" />
              </div>
              <h4 className="text-2xl mb-2 font-bold text-center">Company Name</h4>
              <span className="text-base text-center block">
                One liner about the company
              </span>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Email address or Username"
                label="Enter Username"
              />
              <Input
                type="password"
                placeholder="Password"
                label="Enter Password"
              />
              <Button
                size="medium"
                children="Sign In"
                variant="primary"
                className="w-full mt-2 mb-6"
              />
              <Button
                variant="link"
                size="small"
                children="Forgot password ?"
                className="text-center block"
              />
            </div>
          </div>

          <div className="pt-36">
            <span className="text-sm text-center block text-theme-neutral10">
              Don’t have an account?{" "}
              <Button variant="link" size="small" className="pl-4">
                Create New
              </Button>
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
