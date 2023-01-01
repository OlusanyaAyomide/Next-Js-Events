// import { introvert, extrovert, programming } from "../public/images/exporter";
// const DUMMY_EVENTS = [
//   {
//     id: "1",
//     title: "Programming for everyone",
//     description:
//       "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
//     location: "Somestreet 25, 12345 San Somewhereo",
//     date: "2021-05-12",
//     image: programming.src,
//     isFeatured: false,
//   },
//   {
//     id: "2",
//     title: "Networking for introverts",
//     description:
//       "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
//     location: "New Wall Street 5, 98765 New Work",
//     date: "2021-05-30",
//     image: introvert.src,
//     isFeatured: true,
//   },
//   {
//     id: "3",
//     title: "Networking for extroverts",
//     description:
//       "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
//     location: "My Street 12, 10115 Broke City",
//     date: "2022-04-10",
//     image: extrovert.src,
//     isFeatured: true,
//   },
// ];
export const dummyComment = [
  {comment:"My comment is Amazing 1",by:"maxila"},{comment:"My comment is Amazing 2",by:"maxila"},
]

export function getFeaturedEvents(DUMMY_EVENTS) {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
export function getAllEvents(DUMMY_EVENTS) {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(DUMMY_EVENTS,dateFilter) {
  let { year, month } = dateFilter;
  year = Number(year)
  month = Number(month)
  const filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    if (eventDate.getFullYear() === year && eventDate.getMonth() === month-1){
      return event
    }
  });

  return filteredEvents;
}

export function getEventById(DUMMY_EVENTS) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
