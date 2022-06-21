import React, { useState, HTMLAttributes } from "react";
import { Range, getTrackBackground } from "react-range";
export interface RangeSelectProps extends HTMLAttributes<HTMLBaseElement> {
  rtl: boolean;
  hasTooltip: boolean;
  step: number;
  min: number;
  max: number;
  disabled: boolean;
}

export const RangeSelect = ({
  rtl = true,
  hasTooltip = false,
  step = 1,
  min = 0,
  max = 100,
  disabled = false,
  ...props
}: RangeSelectProps) => {
  const [values, setValues] = useState([50]);
  return (
    <div className="flex justify-center flex-wrap">
      <Range
        disabled={disabled}
        values={values}
        step={step}
        min={min}
        max={max}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="flex w-full h-9"
          >
            <div
              ref={props.ref}
              className="h-1 w-full rounded self-center"
              style={{
                background: getTrackBackground({
                  values,
                  colors: [disabled ? '#999' : '#48AFF0', '#ccc'],
                  min: min,
                  max: max,
                  rtl
                }),
              }}
            >
              {children}
            </div>
            {!hasTooltip && <output className="p-2 ml-4 flex items-center border border-theme-neutral10" id="output">
              {values[0].toFixed(1)}
            </output>}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            className={`${disabled ? 'bg-theme-neutral40' : 'bg-theme-primary'} w-4 h-4 rounded-full hover:shadow-md flex justify-center items-center range-dragger ${isDragged ? 'dragged' : ''}`}
            {...props}
          >
            {hasTooltip && <div
              className="output-tooltip absolute top-9 text-white text-sm px-2 py-2 bg-theme-neutral10"
            >
              {values[0]}
            </div>}
          </div>
        )}
      />
    </div>
  );
};

export default RangeSelect;