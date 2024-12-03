import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent, updateEvent } from "@/redux/slices/event-slice";
import { RootState } from "@/redux/store";
import * as yup from "yup";

type EventModalProps = {
  date: string | null;
  onClose: () => void;
};

const EventModal = ({ date, onClose }: EventModalProps) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) =>
    state.events.events.filter((event) => event.date === date)
  );

  const [title, setTitle] = useState("");
  const [editEventId, setEditEventId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const eventValidationSchema = yup.object().shape({
    title: yup
      .string()
      .max(100, "Must not exceed 100 characters")
      .matches(/^[a-zA-Z0-9 ]*$/, "No special characters allowed (@,$.#_!)")
      .required("Must be filled before adding"),
  });

  const handleAddOrUpdateEvent = async () => {
    try {
      setErrorMessage(null);
      await eventValidationSchema.validate({ title });

      if (editEventId) {
        dispatch(updateEvent({ id: editEventId, title }));
        setEditEventId(null);
      } else if (events.length < 3) {
        dispatch(
          addEvent({
            id: crypto.randomUUID(),
            date: date!,
            title,
            completed: false,
          })
        );
      } else {
        setErrorMessage("Maximum 3 events allowed per day");
      }

      setTitle("");
    } catch (error: unknown) {
      if (error instanceof yup.ValidationError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const handleEdit = (id: string, currentTitle: string) => {
    setEditEventId(id);
    setTitle(currentTitle);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-lg font-bold mb-4 text-primary">Manage Events</h2>

        <input
          type="text"
          className={`border p-2 w-full mb-2 text-primary 
            ${!errorMessage && "border-gray-300"}
            ${errorMessage && "border-red-500"}
          `}
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          onClick={handleAddOrUpdateEvent}
          className="bg-accent text-white p-2 w-full rounded mb-4"
        >
          {editEventId ? "Update Event" : "Add Event"}
        </button>

        <div>
          {events.map((event) => (
            <div
              key={event.id}
              className="flex justify-between items-center mb-2 text-primary"
            >
              <span>{event.title}</span>
              <div>
                <button
                  onClick={() => handleEdit(event.id, event.title)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="bg-gray-500 text-white p-2 w-full rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
