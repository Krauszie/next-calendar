import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const EventList = () => {
  const events = useSelector((state: RootState) => state.events.events);

  // Helper function to format dates
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  // Sort events by date in ascending order
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="mt-4 ml-5 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg text-primary font-bold mb-2">
        All Available Events
      </h2>
      {sortedEvents.length > 0 ? (
        <ul className="space-y-2">
          {sortedEvents.map((event) => (
            <li
              key={event.id}
              className="p-3 border rounded shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-primary">{event.title}</p>
                <p className="text-sm text-gray-600">
                  {formatDate(event.date)}
                </p>
              </div>
              {event.completed && (
                <span className="text-green-600 text-sm font-semibold">
                  Completed
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No events available.</p>
      )}
    </div>
  );
};

export default EventList;
