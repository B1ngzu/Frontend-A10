"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export default function BookingPage() {
  const dispatch = useDispatch();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const handleSubmit = () => {
    if (nameLastname && tel && venue && bookDate) {
      dispatch(
        addBooking({
          nameLastname,
          tel,
          venue,
          bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
        })
      );
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Venue Booking</h1>
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="outlined"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />
        <TextField
          name="Contact-Number"
          label="Contact Number"
          variant="outlined"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <FormControl>
          <InputLabel>Venue</InputLabel>
          <Select id="venue" label="Venue" value={venue} onChange={(e) => setVenue(e.target.value)}>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Booking Date"
            value={bookDate}
            onChange={(newValue) => setBookDate(newValue)}
          />
        </LocalizationProvider>
        <Button name="Book Venue" variant="contained" onClick={handleSubmit}>
          Book Venue
        </Button>
      </div>
    </main>
  );
}
