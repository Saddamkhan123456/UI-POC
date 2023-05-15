import {HTMLAttributes } from "react";
import "./notification.css";
// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export interface NotificationBoxProps extends HTMLAttributes<HTMLElement> {
  position?: any;
  autoClose?: any;
  hideProgressBar?: boolean,
  newestOnTop?: boolean,
  closeOnClick?: boolean,
  pauseOnFocusLoss?: boolean,
  dragToClose?: boolean,
  pauseOnHover?: boolean,
  
}
export const NotificationBox = ({
  position,
  autoClose = 5000,
  hideProgressBar = false,
  newestOnTop = true,
  closeOnClick = false,
  pauseOnFocusLoss = true,
  dragToClose = true,
  pauseOnHover = true,
  ...props
}: NotificationBoxProps) => {

  return (
    <>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick={closeOnClick}
        rtl={false}
        pauseOnFocusLoss={pauseOnFocusLoss}
        draggable={dragToClose}
        pauseOnHover={pauseOnHover}
      />
    </>
  );
};