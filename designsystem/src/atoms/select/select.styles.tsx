 const customStyles = {
  option: (provided: any, state: { isFocused: any }) => ({
    ...provided,
     color: state.isFocused ? '#fff' : '#48AFF0',
    padding: 10,
    background: state.isFocused? '#48AFF0' : '#fff',
  }),
  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
     border: state.isFocused ? "1px solid #48AFF0" : "1px solid #667580",
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: "none",
    border: '1px solid black'
  }),
  multiValue: (provided: any) => ({
    ...provided,
    background: '#CFDCE6',
  }),
  input: (provided: any) => ({
    ...provided,
    borderRadius: "4px"
  }),
}

export default customStyles
