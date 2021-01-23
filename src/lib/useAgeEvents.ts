import React from "react";
import { getRangeNumbers, getYesterday } from "./age";
import { uuid } from "./uuid";
import { EventInput } from "@fullcalendar/react";
import { RESOURCE_ID__SHARED__AGE } from "../constants/resourceIds";

export const useAgeEvents = () => {
  const [ageEvents, setAgeEvents] = React.useState<EventInput[]>([]);

  const calc = React.useCallback((birthday: string | Date) => {
    const endDate = (() => {
      let d = new Date();
      const BUFFER_YEAR = 10;
      d.setFullYear(d.getFullYear() + BUFFER_YEAR);
      return d;
    })();

    const birthDate = new Date(birthday);

    // get year numbers
    const endYear = endDate.getFullYear();
    const startYear = new Date(birthday).getFullYear();

    // create years list
    const years = getRangeNumbers(startYear, endYear);

    // create EventInput obj
    const ageEventList = years.map<EventInput>((year) => {
      const start = (() => {
        birthDate.setFullYear(year);
        return birthDate.toISOString();
      })();

      const end = (() => {
        const yesterday = getYesterday(birthDate);
        yesterday.setFullYear(year + 1);
        return yesterday.toISOString();
      })();

      return {
        id: uuid(),
        resourceId: RESOURCE_ID__SHARED__AGE,
        start,
        end,
      };
    });

    setAgeEvents(ageEventList);
  }, []);

  return [ageEvents, calc] as const;
};
