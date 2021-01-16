import React from "react";
import FullCalendarLib, {EventInput} from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export const FullCalendar = () => {
  const resources = [{
    id: 'resourcesId1',
  }]
  
  const events: EventInput = [
    { id: "1", title: "XXX", resourceId: resources[0].id, start: "2021-01-01T12:00:00", end: '2021-02-01' },
    { id: "2", title: "YYY", resourceId: resources[0].id, start: "2022-04-02" },
    { id: "3", title: "ZZZ", resourceId: resources[0].id, start: "2022-04-02" },
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
      initialView="resourceTimeline"
      headerToolbar={headerToolbar}
      events={events}
      resources={resources}
      views={views}
      schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
    />
  );
};
