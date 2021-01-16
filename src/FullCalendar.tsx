import React from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export const FullCalendar = () => {
  const events = [
    { title: "event 1", start: "2021-04-01", end: '2021-05-01' },
    { title: "event 2", start: "2021-04-02" , end: '2021-06-01'},
  ];

  const headerToolbar = {
    left: "today prev,next",
    center: "title",
    right:
      "myTimeline,resourceTimelineDay,resourceTimelineYear",
  };

  const views = {
    myTimeline: {
      type: 'resourceTimelineYear',
      slotDuration: {week: 1},
      buttonText: 'my-year2'
    }
  };

  return (
    <FullCalendarLib
      plugins={[resourceTimelinePlugin]}
      initialView="myTimeline"
      headerToolbar={headerToolbar}
      events={events}
      views={views}
      editable={true}
      schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
    />
  );
};
