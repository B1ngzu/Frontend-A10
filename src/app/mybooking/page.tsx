"use client";
import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="p-6 text-black">
      <h1 className="text-3xl font-bold mb-4">My Bookings</h1>
      <BookingList />
    </main>
  );
}
