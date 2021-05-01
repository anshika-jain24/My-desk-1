
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
      title: "Event 1",
      start: "2021-05-05T09:00:00",
      end: "2021-05-05T18:00:00"
    },
    {
      title: "Event 2",
      start: "2021-05-08",
      end: "2021-05-10"
    }
  ]

export function createEventId() {
  return String(eventGuid++)
}
