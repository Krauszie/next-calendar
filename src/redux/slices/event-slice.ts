import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Event = {
  id: string;
  date: string;
  title: string;
  completed: boolean;
};

type EventState = {
  events: Event[];
};

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      console.log("Adding Event:", action.payload);
      state.events.push(action.payload);
    },
    updateEvent: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const event = state.events.find((e) => e.id === action.payload.id);
      if (event) {
        event.title = action.payload.title;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      console.log("Delete Event ID:", action.payload);
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
    clearEvents: (state) => {
      console.log("Clearing all events.");
      state.events = []; // Reset the events array
    },
  },
});

export const { addEvent, updateEvent, deleteEvent, clearEvents } =
  eventSlice.actions;
export default eventSlice.reducer;
