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
            { title: 'Project Submission', date: '2021-04-30' },
            { title: 'CT-2', date: '2021-04-29' }
          ]}
        />
      </>
    )
}

export default Calender