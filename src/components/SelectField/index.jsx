const SelectField = ({ options, ...rest }) => {
  return (
    <select
      className="border border-gray-400 w-[10rem] p-4 py-1 font-semibold text-gray-600"
      {...rest}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
