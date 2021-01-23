import React from "react";
import { DatePicker } from "@material-ui/pickers";

import { useAgeContext } from "../../hooks/useAgeContext";
import { FullCalendar } from "../organisms/FullCalendar";

export const CalendarPage: React.VFC = () => {
  const { birth, age, setBirth } = useAgeContext();

  const handleDateChange = React.useCallback((date: Date | null) => {
    if (!date) return;
    console.log(date);
    setBirth(date.toISOString());
  }, [setBirth]);

  return (
    <div>
      <div>age:{age}</div>
      <DatePicker
        disableFuture
        openTo="year"
        format="yyyy-MM-dd"
        label="Date of birth"
        views={["year", "month", "date"]}
        value={birth}
        onChange={handleDateChange}
      />
      <FullCalendar />
    </div>
  );
};
