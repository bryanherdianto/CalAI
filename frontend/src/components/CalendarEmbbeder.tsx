import FullCalendar from '@fullcalendar/react'
import daygridplugin from '@fullcalendar/daygrid';
import timegridplugin from '@fullcalendar/timegrid';
import interactionplugin from '@fullcalendar/interaction'; // needed for dayClick
import { useEffect, useState } from 'react';





function calendar(){
    const [events, setEvents] = useState([
        { title: 'Sample Task 1', date: '2025-04-05' },
        { title: 'Sample Task 2', date: '2025-04-07' },
      ]);

      const addTask = (title: string, date: any) => {
        const newEvent = { title, date };
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      };
    
      // Handle event click to add new task
      const handleDateClick = (arg: { dateStr: any; }) => {
        const title = prompt('Enter task title:');
        if (title) {
          addTask(title, arg.dateStr);
        }
      };

    return (
        <div>
            <FullCalendar
                plugins={[daygridplugin, timegridplugin, interactionplugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                dateClick ={handleDateClick}
                initialDate={new Date()}
                events={events}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true} // allow "more" link when too many events
                weekends={true} // Show weekends
            />
        </div>
    )
}
    

export default calendar;