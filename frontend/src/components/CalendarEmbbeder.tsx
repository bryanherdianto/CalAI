import DashboardElement from '@/elements/DashboardElement';

function Calendar() {
  // import FullCalendar from '@fullcalendar/react'
  // import daygridplugin from '@fullcalendar/daygrid';
  // import timegridplugin from '@fullcalendar/timegrid';
  // import interactionplugin from '@fullcalendar/interaction'; // needed for dayClick
  // import { useState } from 'react';
  
  // const [events, setEvents] = useState([
  //   { title: 'Sample Task 1', date: '2025-04-05' },
  //   { title: 'Sample Task 2', date: '2025-04-07' },
  // ]);
  
  // const addTask = (title: string, date: any) => {
  //   const newEvent = { title, date };
  //   setEvents((prevEvents) => [...prevEvents, newEvent]);
  // };
  
  // // Handle event click to add new task
  // const handleDateClick = (arg: { dateStr: any; }) => {
  //   const title = prompt('Enter task title:');
  //   if (title) {
  //     addTask(title, arg.dateStr);
  //   }
  // };

  return (
    <div className="bg-[#90E0EF] min-h-screen flex flex-col w-screen md:flex-row overflow-hidden">
      <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
        <DashboardElement />
      </div>
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-centerrounded-lg overflow-hidden">
          {/* ntar kalendernya di sini be kalau dah jadi backend */}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&showPrint=0&src=cGVtcGVrcGxnM0BnbWFpbC5jb20&src=Y2xhc3Nyb29tMTAwMDI3NTk0NTUzMjcxMjMxOTM0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAwNDQ5MjMyODU1MzAxMjk0OTg4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1NjM1NTg1NTE0ODk5ODIyMjgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA2MzcwNjk2NDk2NDYwNzEyODIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4OTA0MTIzMzkzNTU5MTgwOTA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YzQyMDEyYzA1MzI4ZTA5M2I0NGI3Y2M5ODBkM2NmNWUzMTU4MzgwMjZlYTUxNTM5YzBkZjkwZjhlNDBlYzg3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237627bb&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%23A79B8E"
            className="w-full h-[100vh] md:h-[70vh] lg:h-[90vh]"
            sandbox="allow-scripts allow-same-origin"
            title="Google Calendar"
          ></iframe>
          
          {/*
          <FullCalendar
            plugins={[daygridplugin, timegridplugin, interactionplugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            dateClick={handleDateClick}
            initialDate={new Date()}
            events={events}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            height="auto"
          />
          */}
        </div>
      </div>
    </div>
  );
}

export default Calendar;