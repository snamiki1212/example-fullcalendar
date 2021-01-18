import React from "react";
import FullCalendarLib, { EventInput } from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";

const FIELD__H1__LIST = {
  VISA: "VISA",
  STATUS: "STATUS"
} as const;

const FIELD_NAME = {
  H1: "FIELD__H1",
  H2: "FIELD__H2",
} as const;

const resourceAreaColumns = [
  {
    group: true,
    field: FIELD_NAME["H1"],
    headerContent: "Category",
  },
  {
    field: FIELD_NAME["H2"],
    headerContent: "Event",
  },
];

const RESOURCE_ID__VISA__STUDY = 'RESOURCE_ID__VISA__STUDY'
  const RESOURCE_ID__VISA__COOP = 'RESOURCE_ID__VISA__COOP'
  const RESOURCE_ID__VISA__WORKING_HOLIDAY = 'RESOURCE_ID__VISA__WORKING_HOLIDAY'
  const RESOURCE_ID__STATUS__WORKER = 'RESOURCE_ID__STATUS__WORKER'
  const RESOURCE_ID__STATUS__STUDENT = 'RESOURCE_ID__STATUS__STUDENT'
  

export const FullCalendar = () => {
  
  const resources = [
    // VISA
    {
      id: RESOURCE_ID__VISA__STUDY,
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Study VISA",
    },
    {
      id: RESOURCE_ID__VISA__COOP,
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Co-op VISA",
    },
    {
      id: RESOURCE_ID__VISA__WORKING_HOLIDAY,
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Working Holiday VISA",
    },

    // STATUS
    {
      id: RESOURCE_ID__STATUS__STUDENT,
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
      [FIELD_NAME["H2"]]: "Student",
    },
    {
      id: RESOURCE_ID__STATUS__WORKER,
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
      [FIELD_NAME["H2"]]: "Worker",
    },

  ];

  const events: EventInput = [
    {
      id: "1",
      resourceId: RESOURCE_ID__VISA__STUDY,
      start: "2020-11-20",
      end: "2023-01-01",
    },
    {
      id: "2",
      resourceId: RESOURCE_ID__VISA__COOP,
      start: "2022-01-01",
      end: "2023-01-01",
    },
    {
      id: "3",
      resourceId: RESOURCE_ID__VISA__WORKING_HOLIDAY,
      start: "2022-06-01",
      end: "2023-06-01",
    },

    {
      id: "4",
      resourceId: RESOURCE_ID__STATUS__STUDENT,
      start: "2020-11-20",
      end: "2023-01-01",
    },

    {
      id: "5",
      resourceId: RESOURCE_ID__STATUS__WORKER,
      start: "2022-01-01",
      end: "2023-06-01",
    },
  ];

  const headerToolbar = {
    left: "today prev,next",
    center: "title",
    right: "myTimeline,resourceTimelineDay,resourceTimelineYear,listMonth",
  };

  const views = {
    myTimeline: {
      type: "resourceTimelineYear",
      slotDuration: { month: 1 },
      buttonText: "my-year2",
    },
  };

  return (
    <FullCalendarLib
      plugins={[resourceTimelinePlugin, listPlugin]}
      initialView="myTimeline"
      headerToolbar={headerToolbar}
      events={events}
      resources={resources}
      resourceAreaColumns={resourceAreaColumns}
      views={views}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
    />
  );
};
