import { HTMLAttributes, useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "../../atoms/button";
import Icon from "../../atoms/icons/icon";

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  showFooter?: boolean;
  showClose?: boolean;
  title?: string;
  isVisible?: boolean;
  onSave?: any;
  onClose?: any;
  footerAlign?: string;
  showOnSave?:boolean
  showOnClose?: boolean
}

export const Modal = ({
  size = "medium",
  children,
  title,
  showFooter,
  footerAlign,
  showClose,
  className,
  onSave,
  isVisible,
  onClose,
  showOnSave,
  showOnClose,
  ...props
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isVisible);
  useEffect(() => {
    setShowModal(isVisible);
  }, [isVisible]);

  const saveClick = () => {
    setShowModal(false);
    onSave();
  };
  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return showModal ? (
    <>
      <div className="justify-center items-center fixed h-full w-full top-0 left-0 modal">
        <div className="relative h-full w-full">
          <div
            className={classNames(
              "p-4 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2  max-w-100 z-50",
              size === "small" && "w-1/4",
              size === "medium" && "w-1/2",
              size === "large" && "w-full"
            )}
          >
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white">
              <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-blueGray-200 rounded-t">
                <h3>{title}</h3>
                {showClose && (
                  <Icon
                    kind="close"
                    size={16}
                    className="cursor-pointer mt-1 mr-1"
                    onClick={() => closeModal()}
                  />
                )}
              </div>
              <div className="p-5">
                <div className="modal-body overflow-y-auto">{children}</div>
              </div>
              {showFooter && (
                <div className={`flex items-center justify-${footerAlign} px-5 py-3 border-t border-solid border-blueGray-200 rounded-b`}>
                  {showOnClose &&  
                    <Button
                      size="small"
                      variant="link"
                      onClick={() => closeModal()}
                      className="mr-1"
                    >
                      Cancel
                    </Button>
                  }
                  {showOnSave &&
                    <Button
                      size="small"
                      variant="primary"
                      onClick={(e) => saveClick()}
                    >
                      Save
                    </Button>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="opacity-20 fixed inset-0 z-40 bg-black"
          onClick={() => closeModal()}
        ></div>
      </div>
    </>
  ) : null;
};
