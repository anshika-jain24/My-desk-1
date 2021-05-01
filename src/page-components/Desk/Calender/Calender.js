import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calender() {
    return (
      <>
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
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
          ]}
        />
      </>
    )
}

export default Calender