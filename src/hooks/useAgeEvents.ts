import React from "react";
import { getRangeNumbers, getPrevMonth } from "../lib/age";
import { uuid } from "../lib/uuid";
import { EventInput } from "@fullcalendar/react";
import { RESOURCE_ID__SHARED__AGE } from "../constants/resourceIds";

const getLastYear = () => {
  const BUFFER_YEAR = 10;

  let d = new Date();
  d.setFullYear(d.getFullYear() + BUFFER_YEAR);
  return d.getFullYear();
};

export const useAgeEvents = () => {
  const [ageEvents, setAgeEvents] = React.useState<EventInput[]>([]);

  const calc = React.useCallback((birthday: string | Date) => {
    const birthDate = new Date(birthday);

    // get year num
    const endYear = getLastYear();
    const startYear = new Date(birthday).getFullYear();

    // create years list
    const years = getRangeNumbers(startYear, endYear);

    // create EventInput obj
    const ageEventList = years.map<EventInput>((year, index) => {
      const start = (() => {
        birthDate.setFullYear(year);
        return birthDate.toISOString();
      })();

      const end = (() => {
        const prevMonth = getPrevMonth(birthDate);
        prevMonth.setFullYear(year + 1);
        return prevMonth.toISOString();
      })();

      return {
        id: uuid(),
        resourceId: RESOURCE_ID__SHARED__AGE,
        title: `age:${index}`,
        start,
        end,
      };
    });

    setAgeEvents(ageEventList);
  }, []);

  return [ageEvents, calc] as const;
};
