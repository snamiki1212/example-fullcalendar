import { getRangeNumbers, getYesterday, getPrevMonth } from "./age";

describe("func: getRangeNumbers", () => {
  it("common", () => {
    const result = getRangeNumbers(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
  it("same value", () => {
    const result = getRangeNumbers(1, 1);
    const expected = [1];
    expect(result).toEqual(expected);
  });
  it("invalid value", () => {
    const result = getRangeNumbers(2, 1);
    const expected = [];
    expect(result).toEqual(expected);
  });
});

describe("func: getYesterday", () => {
  it("common", () => {
    const date = new Date("2020-01-02");
    const yesterday = getYesterday(date);
    const expected = new Date("2020-01-01");
    expect(yesterday).toEqual(expected);
  });
  it("pass year", () => {
    const date = new Date("2020-01-01");
    const yesterday = getYesterday(date);
    const expected = new Date("2019-12-31");
    expect(yesterday).toEqual(expected);
  });
  it("pass month", () => {
    const date = new Date("2020-02-01");
    const yesterday = getYesterday(date);
    const expected = new Date("2020-01-31");
    expect(yesterday).toEqual(expected);
  });
});

describe("func: getPrevMonth", () => {
  it("common", () => {
    const date = new Date("2020-02-01");
    const prevMonth = getPrevMonth(date).getFullYear();
    const expected = new Date("2020-01-01").getFullYear();
    expect(prevMonth).toEqual(expected);
  });
  it("common", () => {
    const date = new Date("2020-03-30");
    const prevMonth = getPrevMonth(date).getFullYear();
    const expected = new Date("2020-02-01").getFullYear();
    expect(prevMonth).toEqual(expected);
  });
});
