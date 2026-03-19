"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch();

  if (bookItems.length === 0) {
    return <div className="text-center text-gray-500 mt-8 text-lg">No Venue Booking</div>;
  }

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {bookItems.map((item, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow w-72">
          <h2 className="text-lg font-semibold mb-3">{item.nameLastname}</h2>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Tel: {item.tel}</p>
            <p>Venue: <span className="font-medium text-gray-800">{item.venue}</span></p>
            <p>Date: <span className="font-medium text-gray-800">{item.bookDate}</span></p>
          </div>
          <button
            className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}
