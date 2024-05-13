import DataTable from "../DataTable";
import InputField from "../InputField";
import SelectField from "../SelectField";
import { IoIosArrowDown } from "react-icons/io";

const timeOptions = [
  { value: "day", label: "Any Time" },
  { value: "night", label: "Night" },
  { value: "day", label: "Day" },
];

const passengerOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
];

const FlightForm = () => {
  return (
    <div className="px-[15rem]">
      <hr className="border-b  border-b-blue-300" />
      <form className="py-3 flex gap-2">
        <InputField type="text" placeholder="LHR" />
        <InputField type="text" placeholder="CDG" />
        <InputField type="date" placeholder="Select Date" />
        <div className="relative">
          <input
            type="text"
            className="border focus:outline-none px-5 text-lg w-[7rem] border-gray-500 rounded h-12 "
            name=""
            id=""
            placeholder="Day -"
          />
          <IoIosArrowDown className="absolute top-4 right-3" />
        </div>
        <div className="relative">
          <input
            type="text"
            className="border focus:outline-none px-5 text-lg w-[7rem] border-gray-500 rounded h-12 "
            name=""
            id=""
            placeholder="Day +"
          />
          <IoIosArrowDown className="absolute top-4 right-3" />
        </div>
        <SelectField options={timeOptions} />
        <button className="px-4 text-xl font-medium">+</button>
        <div className="relative">
          <input
            type="text"
            className="border focus:outline-none px-5 text-lg w-[7rem] border-gray-500 rounded h-12 "
            name=""
            id=""
            placeholder="Adt"
          />
          <IoIosArrowDown className="absolute top-4 right-3" />
        </div>
        <SelectField options={passengerOptions} />
        <button className="font-bold mx-0 text-xl px-4">+</button>
      </form>
      <hr className="border-b  border-b-blue-300" />
    </div>
  );
};

export default FlightForm;
