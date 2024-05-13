const DataTable = ({ flights }) => {
  return (
    <div className="mt-4 overflow-x-scroll px-[15rem]">
      <table className="bg-gray-100 min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">Flight</th>
            <th className="px-6 py-3 text-left">Aircraft</th>
            <th className="px-6 py-3 text-left">Class</th>
            <th className="px-6 py-3 text-left">Fare</th>
            <th className="px-6 py-3 text-left">Route</th>
            <th className="px-6 py-3 text-left">Departure</th>
            <th className="px-6 py-3 text-left">Arrival</th>
            <th className="px-6 py-3 text-center">Duration</th>
            <th className="px-6 py-3 text-center">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {flights.map((flight, index) => (
            <>
              <tr key={index}>
                <td className="px-6">
                  {flight.itineraries.map((itinerary) =>
                    itinerary.segments.map((segment, segmentIndex) => (
                      <div key={segmentIndex} className="text-sm text-gray-900">
                        <span>
                          {segment.carrierCode} {segment.aircraft}
                        </span>
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6 ">
                  {flight.itineraries.map((itinerary) =>
                    itinerary.segments.map((segment, segmentIndex) => (
                      <div key={segmentIndex} className="text-sm text-gray-900">
                        <span>{segment.flightNumber}</span>
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6 ">
                  {flight.class.map((cls, clsIndex) => (
                    <div key={clsIndex}>
                      {cls.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item}
                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="px-6">
                  {flight.fareBasis.map((fare, fareIndex) => (
                    <div key={fareIndex}>
                      {fare.map((basis, basisIndex) => (
                        <div key={basisIndex}>
                          {basis}
                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="px-6 ">
                  {flight.itineraries.map((itinerary) =>
                    itinerary.segments.map((segment, segmentIndex) => (
                      <div key={segmentIndex} className="text-sm text-gray-900">
                        <span>
                          {segment.departure.iataCode} -{" "}
                          {segment.arrival.iataCode}
                        </span>
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6 ">
                  {flight.itineraries.map((itinerary) =>
                    itinerary.segments.map((segment, segmentIndex) => (
                      <div key={segmentIndex} className="text-sm text-gray-900">
                        <span>{segment.departure.at}</span>
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6">
                  {flight.itineraries.map((itinerary) =>
                    itinerary.segments.map((segment, segmentIndex) => (
                      <div key={segmentIndex} className="text-sm text-gray-900">
                        <span>{segment.arrival.at}</span>
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6 text-sm text-center text-gray-900">
                  {flight.itineraries.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      <span>{itinerary.duration}</span>
                      <br />
                    </div>
                  ))}
                </td>
                <td className="px-6 py-2 text-sm text-center font-medium">
                  <div className="text-sm text-gray-900">{flight.price}</div>
                  <button className="mt-2 bg-blue-900 hover:bg-gray-900 text-white py-2 px-4 rounded ">
                    SELECT
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      {!flights.length && (
        <div className="w-full text-center py-60">
          Please submit the form ...
        </div>
      )}
    </div>
  );
};

export default DataTable;
