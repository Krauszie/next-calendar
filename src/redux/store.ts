import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import calendarReducer from "./slices/calendar-slice";
import eventsReducer from "./slices/event-slice";

const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers for persisting
const rootReducer = combineReducers({
  calendar: calendarReducer,
  events: eventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Always included since im not using middleware
    }),
});

// Configure persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
