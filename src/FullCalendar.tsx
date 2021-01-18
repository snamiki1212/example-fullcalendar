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

export const FullCalendar = () => {
  const resources = [
    {
      id: "resourceId1",
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Study VISA",
    },
    {
      id: "resourceId2",
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Co-op VISA",
    },
    {
      id: "resourceId3",
      [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
      [FIELD_NAME["H2"]]: "Working Holiday VISA",
    },
  ];

  const events: EventInput = [
    {
      id: "1",
      resourceId: resources[0].id,
      start: "2020-11-20",
      end: "2023-01-01",
    },
    {
      id: "2",
      resourceId: resources[1].id,
      start: "2022-01-01",
      end: "2023-01-01",
    },
    {
      id: "3",
      resourceId: resources[2].id,
      start: "2022-06-01",
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
