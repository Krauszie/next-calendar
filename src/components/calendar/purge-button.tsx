import React from "react";
import { useDispatch } from "react-redux";
import { clearEvents } from "@/redux/slices/event-slice"; // Adjust the path to your slice
import { persistStore } from "redux-persist";
import { store } from "@/redux/store"; // Adjust the path to your store

const PurgeEventsButton = () => {
  const dispatch = useDispatch();

  const handlePurge = () => {
    // Clear events from Redux state
    dispatch(clearEvents());

    // Purge persisted state
    const persistor = persistStore(store);
    persistor.purge().then(() => {
      console.log("Persisted state purged.");
    });
  };

  return (
    <div className="mx-auto mt-4 w-auto">
      <button
        onClick={handlePurge}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Delete All Events
      </button>
    </div>
  );
};

export default PurgeEventsButton;
