import { useState } from "react";

const Tab = ({ tabName, activeTab, onClick }) => (
  <button
    type="button"
    className={`w-[8rem] text-center text-[14px] py-1 ${
      activeTab === tabName ? "bg-blue-900 text-gray-200" : ""
    }`}
    onClick={() => onClick(tabName)}
  >
    {tabName}
  </button>
);

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState("one-way");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pb-[3rem]">
      <p className="lg:px-64 text-4xl font-semibold">Master Price</p>
      <hr className="mt-2" />
      <div className="mt-7">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="border border-gray-500 rounded inline-block">
              <div className="flex items-center justify-center">
                {["round-trip", "one-way", "multi-city"].map((tab) => (
                  <Tab
                    key={tab}
                    tabName={tab}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSelector;
