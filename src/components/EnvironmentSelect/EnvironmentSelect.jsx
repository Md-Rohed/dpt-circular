import { useState } from "react";

const EnvironmentSelect = ({ onSearch }) => {
  const [isDataParsed, setIsDataParsed] = useState(false);

  const handleSearchClick = () => {
    setIsDataParsed(true);
    onSearch();
  };

  return (
    <div className="mt-5 px-[15rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5" name="" id="" />
          <p className="text-xl font-semibold">Extra Options</p>
        </div>
        <div className={` flex items-center gap-5`}>
          <p className="font-semibold">Environment</p>
          <div className="flex items-center gap-3">
            <input type="radio" className="w-5 h-5 checked" name="" id="" />
            <p className="font-semibold">Dummy</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" className="w-5 h-5 checked" name="" id="" />
            <p className="font-semibold">PDT</p>
          </div>
        </div>
        <div onClick={handleSearchClick}>
          <button className="bg-blue-900 px-7 py-2 text-gray-100 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="h-[1px] ww-full bg-blue-400 mt-5"></div>
      {isDataParsed && <p>Data Parsed Successfully</p>}
    </div>
  );
};

export default EnvironmentSelect;
