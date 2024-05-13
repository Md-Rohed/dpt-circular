import React, { useEffect, useState } from "react";
import FlightForm from "./components/FlightForm/FlightForm";
import TabSelector from "./components/TabSelector";
import EnvironmentSelect from "./components/EnvironmentSelect/EnvironmentSelect";
import DataTable from "./components/DataTable";
import Header from "./components/header";

function App() {
  const [flightData, setFlightData] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await fetch(
          "../../../public/LHR_CDG_ADT1_TYPE_1.json"
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch flight data. Network response was not ok"
          );
        }
        const data = await response.json();
        setFlightData(data);
      } catch (error) {
        console.error("Failed to fetch flight data:", error);
      }
    };

    fetchFlightData();
  }, []);

  const handleSearch = () => {
    if (!flightData || flightData.length === 0) {
      console.log("Flight data is empty or undefined.");
      return;
    }
    setFilteredFlights(flightData?.flightOffer);
  };

  return (
    <div className="">
      <Header />
      <TabSelector />
      <EnvironmentSelect onSearch={handleSearch} />
      <FlightForm />
      <DataTable flights={filteredFlights} />
    </div>
  );
}

export default App;
