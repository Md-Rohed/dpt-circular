import InputField from "../InputField";
import SelectField from "../SelectField";

const timeOptions = [
  { value: "day", label: "Any Time" },
  { value: "night", label: "Night" },
  { value: "day", label: "Day" },
];

const passengerOptions = [
  { value: "ADT", label: "ADT" },
  { value: "child", label: "Child" },
];

const FlightForm = () => {
  return (
    <div className="px-[7.5rem]">
      <hr className="border-b  border-b-blue-300" />
      <form className="py-3 flex gap-2">
        <InputField type="text" placeholder="LHR" style={{ width: "7rem" }} />
        <InputField type="text" placeholder="CDG" style={{ width: "7rem" }} />
        <InputField
          type="date"
          placeholder="Select Date"
          style={{ width: "8rem" }}
        />
        <SelectField options={timeOptions} className="select-time" />
        <SelectField options={timeOptions} className="select-time" />
        <SelectField options={timeOptions} className="select-time" />
        <button className="add-button">+</button>
        <SelectField options={passengerOptions} />
        <button className="font-bold mx-0 text-xl">+</button>
      </form>
      <hr className="border-b  border-b-blue-300" />
    </div>
  );
};

export default FlightForm;
