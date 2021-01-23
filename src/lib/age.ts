export const getRangeNumbers = (start: number, end: number) => {
  let list = [] as number[];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};

export const getYesterday = (date: string | Date) => {
  const MILLI_SECONDS_TO_YESTERDAY = 1000 * 60 * 60 * 24 * 1; // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
  const unixTimeOfYesterday =
    new Date(date).getTime() - MILLI_SECONDS_TO_YESTERDAY;
  return new Date(unixTimeOfYesterday);
};
