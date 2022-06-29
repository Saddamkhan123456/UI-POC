import { Story } from "@storybook/react";
import { NotificationBox, NotificationBoxProps } from "./index";
import { Button } from "design-system";
import { toast } from "react-toastify";

const Toast = {
  title: "Design System/Molecules/Notification",
  component: NotificationBox,
  argTypes: {
    position: {
      type: "any",
      options: [
        "top-right",
        "top-center",
        "top-left",
        "bottom-right",
        "bottom-center",
        "bottom-left",
      ],
    },
    autoClose: {
      type: "any",
      defaultValue: 150000,
    },
    hideProgressBar: {
      type: "boolean",
      defaultValue: false,
    },
    newestOnTop: {
      type: "boolean",
      defaultValue: true,
    },
    closeOnClick: {
      type: "boolean",
      defaultValue: false,
    },
    dragToClose: {
      type: "boolean",
      defaultValue: true,
    },
    pauseOnHover: {
      type: "boolean",
      defaultValue: true,
    },
  },
};

export default Toast;

const Msg = () => (
  <>
    <p className="text-lg font-medium mb-0 text-theme-neutral10 leading-none">
      Main title here
    </p>
    <span className="text-sm text-theme-neutral35">
      There seems to be a problem
    </span>
  </>
);

const TemplateSuccess: Story<NotificationBoxProps> = (args) => {
  return (
    <>
      <Button size="medium" variant="primary" onClick={notifySuccess}>
        Notify Me!
      </Button>
      <NotificationBox {...args} />
    </>
  );
};

export const Success = TemplateSuccess.bind({});
const notifySuccess = () => toast.success(<Msg />);
Success.args = {};

const TemplateError: Story<NotificationBoxProps> = (args) => {
  return (
    <>
      <Button size="medium" variant="danger" onClick={notifyError}>
        Notify Me!
      </Button>
      <NotificationBox {...args} />
    </>
  );
};

export const Error = TemplateError.bind({});
const notifyError = () => toast.error(<Msg />);
Error.args = {};

const TemplateAlert: Story<NotificationBoxProps> = (args) => {
  return (
    <>
      <Button size="medium" variant="danger" onClick={notifyAlert}>
        Notify Me!
      </Button>
      <NotificationBox {...args} />
    </>
  );
};

export const Alert = TemplateAlert.bind({});
const notifyAlert = () => toast.warning(<Msg />);
Alert.args = {};
