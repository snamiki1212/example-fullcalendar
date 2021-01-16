import React from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export const FullCalendar = () => {
  return (
    <FullCalendarLib
      plugins={[resourceTimelinePlugin]}
      initialView="resourceTimeline"
    />
  );
};
