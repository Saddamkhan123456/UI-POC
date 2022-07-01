import { useState } from "react";
import { Story } from "@storybook/react";
import { Button } from "design-system";
import { ModalProps, Modal } from "./index";

const ModalComponent = {
  title: "Design System/Templates/Modal",
  component: Modal,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    title: {
      type: "string",
    },
    showFooter: {
      type: "boolean",
    },
    showClose: {
      type: "boolean",
    },
    footerAlign: {
      type: "select",
      options: ["start", "center", "end"],
      defaultValue: "end",
    },
  },
  showOnSave: {
    type: "boolean",
  },
  showOnClose: {
    type: "boolean",
  }
};

export default ModalComponent

const Template: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        size="medium"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </Button>
      <Modal
        {...args}
        isVisible={showModal}
        onSave={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
        
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  title: "Modal Title",
  showFooter: true,
  showClose: true,
  footerAlign: "end",
  showOnSave: true,
  showOnClose: true
};
