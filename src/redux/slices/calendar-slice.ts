import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CalendarState = {
  year: number;
  month: number;
  clickedDate: number | null;
};

const initialState: CalendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(), // 0-based index
  clickedDate: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setClickedDate: (state, action: PayloadAction<number | null>) => {
      state.clickedDate = action.payload;
    },
    navigateMonth: (state, action: PayloadAction<"prev" | "next">) => {
      if (action.payload === "prev") {
        if (state.month === 0) {
          state.month = 11;
          state.year -= 1;
        } else {
          state.month -= 1;
        }
      } else {
        if (state.month === 11) {
          state.month = 0;
          state.year += 1;
        } else {
          state.month += 1;
        }
      }
    },
  },
});
export const { setClickedDate, navigateMonth } = calendarSlice.actions;
export default calendarSlice.reducer;
