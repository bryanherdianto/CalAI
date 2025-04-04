// import FullCalendar from '@fullcalendar/react'
// import daygridplugin from '@fullcalendar/daygrid';
// import timegridplugin from '@fullcalendar/timegrid';
// import interactionplugin from '@fullcalendar/interaction'; // needed for dayClick
// import { useState } from 'react';

import DashboardElement from '@/elements/DashboardElement';



function calendar(){
    // const [events, setEvents] = useState([
    //     { title: 'Sample Task 1', date: '2025-04-05' },
    //     { title: 'Sample Task 2', date: '2025-04-07' },
    //   ]);

    //   const addTask = (title: string, date: any) => {
    //     const newEvent = { title, date };
    //     setEvents((prevEvents) => [...prevEvents, newEvent]);
    //   };
    
    //   // Handle event click to add new task
    //   const handleDateClick = (arg: { dateStr: any; }) => {
    //     const title = prompt('Enter task title:');
    //     if (title) {
    //       addTask(title, arg.dateStr);
    //     }
    //   };

    return (
      <div className="bg-cover bg-[#90E0EF] min-h-screen min-w-screen items-center justify-start text-white relative overflow-clip">
      <div className="flex max-w-7xl w-full">
        <div className="w-1/4">
                <DashboardElement />
            </div>

            <div className="min-w-screen min-h-screen flex justify-center items-center overflow-hidden">
                {/* <FullCalendar
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
            /> */}
            <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&showPrint=0&src=cGVtcGVrcGxnM0BnbWFpbC5jb20&src=Y2xhc3Nyb29tMTAwMDI3NTk0NTUzMjcxMjMxOTM0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAwNDQ5MjMyODU1MzAxMjk0OTg4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1NjM1NTg1NTE0ODk5ODIyMjgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA2MzcwNjk2NDk2NDYwNzEyODIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4OTA0MTIzMzkzNTU5MTgwOTA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YzQyMDEyYzA1MzI4ZTA5M2I0NGI3Y2M5ODBkM2NmNWUzMTU4MzgwMjZlYTUxNTM5YzBkZjkwZjhlNDBlYzg3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237627bb&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%23A79B8E"
          className="border border-solid md:ml-[15vw] md:w-[800px] md:h-[700px] md:mt-0 w-screen h-[90vh] mt-[10vh] border-[#777]"
        ></iframe>
            </div>
        </div>
     </div>
    )
}
    

export default calendar;