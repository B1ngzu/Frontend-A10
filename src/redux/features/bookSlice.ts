import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookingItem = {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
};

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const incoming = action.payload;
      const existingIndex = state.bookItems.findIndex(
        (item) => item.venue === incoming.venue && item.bookDate === incoming.bookDate
      );
      if (existingIndex !== -1) {
        state.bookItems[existingIndex] = incoming;
      } else {
        state.bookItems.push(incoming);
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const toRemove = action.payload;
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === toRemove.nameLastname &&
            item.tel === toRemove.tel &&
            item.venue === toRemove.venue &&
            item.bookDate === toRemove.bookDate
          )
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
