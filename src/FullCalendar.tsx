import React from "react";
import FullCalendarLib, {
  EventInput,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { uuid } from './lib/uuid'

const FIELD__H1__LIST = {
  VISA: "VISA",
  STATUS: "STATUS",
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

const RESOURCE_ID__VISA__STUDY = "RESOURCE_ID__VISA__STUDY";
const RESOURCE_ID__VISA__COOP = "RESOURCE_ID__VISA__COOP";
const RESOURCE_ID__VISA__WORKING_HOLIDAY = "RESOURCE_ID__VISA__WORKING_HOLIDAY";
const RESOURCE_ID__STATUS__WORKER = "RESOURCE_ID__STATUS__WORKER";
const RESOURCE_ID__STATUS__STUDENT = "RESOURCE_ID__STATUS__STUDENT";

const MY_TIME_LINE = "MY_TIME_LINE";

const views = {
  [MY_TIME_LINE]: {
    type: "resourceTimelineYear",
    slotDuration: { month: 1 },
    buttonText: "TIME_LINE",
  },
};

const headerToolbar = {
  left: "today prev,next",
  center: "title",
  right: `${MY_TIME_LINE},listMonth`,
};

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

  // ETC
  {
    id: "etc",
    [FIELD_NAME["H1"]]: "H1__ETC__",
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

  // STATUS
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

export const FullCalendar = () => {
  const [_events, setEvents] = React.useState(events);

  const select = (info: DateSelectArg) => {
    console.log("select");

    setEvents((prev) => {
      return [...(prev as unknown[]), {
        id: uuid(),
        resourceId: "etc",
        start: info.startStr,
        end: info.endStr,
      }]
    });
  };

  const click = (info: EventClickArg) => {
    if(!window.confirm("Would you like to remove this event?")) return;

    console.log("click id", info);

    const id = info.event.id
    setEvents(prev => {
      console.log("prev", prev)
      return (prev as any[]).filter(e => e.id !== id)
    })
  }

  return (
    <FullCalendarLib
      selectable={true}
      editable={true}
      plugins={[interactionPlugin, resourceTimelinePlugin, listPlugin]}
      initialView={MY_TIME_LINE}
      headerToolbar={headerToolbar}
      events={_events}
      resources={resources}
      resourceAreaColumns={resourceAreaColumns}
      views={views}
      select={select}
      eventClick={click}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
    />
  );
};
