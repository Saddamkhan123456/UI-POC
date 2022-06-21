import Select from 'react-select';
import customStyles from './select.styles'



export interface SelectBoxProps {
  defaultValue: any;
  onChange : any;
  options: any;
  defaultMenuIsOpen?: boolean;
  placeholder? : string | undefined;
  isMulti?: boolean;
  autoFocus? : boolean;
  className?: string;
  classNamePrefix?: string;
  isDisabled?: boolean;
  isSearchable?: boolean;
  name?: string;
  value?: any;
  menuIsOpen?: boolean;
  styles?: any;
}


export  const SelectBox= ({
  defaultValue,
  onChange,
  options,
  defaultMenuIsOpen,
  placeholder,
  isMulti,
  autoFocus,
  className,
  classNamePrefix,
  isDisabled,
  isSearchable,
  name,
  value,
  menuIsOpen,
  styles,
  ...props
} : SelectBoxProps) => {

  return (
    <div className="App">
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        defaultMenuIsOpen={defaultMenuIsOpen}
        placeholder={placeholder}
        isMulti={isMulti}
        autoFocus={autoFocus}
        className={className}
        classNamePrefix={classNamePrefix}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        name={name}
        value={value}
        menuIsOpen={menuIsOpen}
        styles={customStyles}
        {...props}
      />
    </div>
  );
}

