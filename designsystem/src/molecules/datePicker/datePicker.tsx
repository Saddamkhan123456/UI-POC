import { format } from 'date-fns';
import {  HTMLAttributes, useState } from 'react';
import DatePicker from "react-datepicker";
import { Input } from '../../atoms/input';

export interface DateSelectorProps extends HTMLAttributes<HTMLBaseElement> {
  isDateRange?: boolean;
  variant: "small" | "medium" | "large";
  rangeInputClassName?: any;
  disabled?: false,
}

export const DateSelector = ({
  isDateRange,
  variant = "small",
  rangeInputClassName = "",
  disabled = false,
  ...props
  }: DateSelectorProps) => {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
  
    const handleChange = (e: any) => {
      setIsOpen(!isOpen);
      setStartDate(e);
    };
    const handleClick = (e: any) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    // for date range
    const [startDate1, setStartDate1] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onRangeChange = (dates: any) => {
      const [start, end] = dates;
      setStartDate1(start);
      setEndDate(end);
    };
    return (
      <>
      {!isDateRange ? 
          <> 
          <Input value={format(startDate, "dd-MM-yyyy")} variant={variant} type={'text'} onClick={handleClick} className="" placeholder="mm/dd/yyyy" disabled={disabled} />
          {isOpen && (
            <DatePicker closeOnScroll={true} selected={startDate} onChange={handleChange} inline disabled={disabled} />
          )} 
        </>
        :
        <>
          <DatePicker
            className={`form-control date-range-picker-input ${rangeInputClassName}` }
            closeOnScroll={true}
            selected={startDate1}
            onChange={onRangeChange}
            startDate={startDate1}
            endDate={endDate}
            selectsRange
            disabled={disabled}
          />
        </>
      }
      </>
    );
  };
