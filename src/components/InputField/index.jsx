const InputField = ({ type, placeholder, options }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-400 px-2 py-1 font-semibold hover:bg-sky-200 outline-none"
      {...options}
    />
  );
};

export default InputField;
