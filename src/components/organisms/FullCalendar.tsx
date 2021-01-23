import React from "react";
import FullCalendarLib, {
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { uuid } from "../../lib/uuid";
import { useAgeEvents } from "../../hooks/useAgeEvents";
import {
  resourceAreaColumns,
  views,
  headerToolbar,
  resources,
  events,
  slotLabelFormat,
  MY_TIME_LINE,
} from "../../constants/index";

export const FullCalendar = () => {
  const [_events, setEvents] = React.useState(events);

  const birthday = "1990-12-12";
  const [ageEvents, calcAgeEvents] = useAgeEvents();

  React.useEffect(() => {
    calcAgeEvents(birthday);
  }, [birthday, calcAgeEvents]);

  React.useEffect(() => {
    setEvents((prev) => [...ageEvents, ...prev]);
  }, [ageEvents]);

  console.log("ageEvents", ageEvents);

  const select = (info: DateSelectArg) => {
    setEvents((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          resourceId: info.resource?.id,
          start: info.startStr,
          end: info.endStr,
        },
      ];
    });
  };

  const click = (info: EventClickArg) => {
    if (!window.confirm("Would you like to remove this event?")) return;

    const id = info.event.id;
    setEvents((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

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
      slotLabelFormat={slotLabelFormat}
      initialDate={"2020-06-01"}
      // slotLabelInterval={{years: 3}}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
    />
  );
};
