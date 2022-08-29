import { HTMLAttributes } from "react";
import SlidingPanel from "react-sliding-side-panel";

export interface OffCanvasProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClose: any;
  type: any;
  sizeInPercentage: number;
  panelClassName: string;
  panelContainerClassName: string;
  noBackdrop: boolean;
  props: any;
}

export const OffCanvasComponent = ({
  isOpen,
  onClose,
  type,
  sizeInPercentage,
  panelClassName,
  panelContainerClassName,
  noBackdrop,
  ...props
}: OffCanvasProps) => {
  return (
    <SlidingPanel
      type={type}
      isOpen={isOpen}
      backdropClicked={(e) => onClose(e)}
      size={sizeInPercentage}
      panelClassName={panelClassName}
      panelContainerClassName={panelContainerClassName}
      noBackdrop={noBackdrop}
    >
      <div className="panel-container">{props.children}</div>
    </SlidingPanel>
  );
};

export default OffCanvasComponent;
