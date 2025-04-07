"use client"

import DashboardElement from "@/components/DashboardElement"

function Calendar() {
  return (
    <div className="bg-[#90E0EF] min-h-screen flex flex-col w-full md:flex-row overflow-hidden max-w-[1920px] mx-auto">
      <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
        <DashboardElement />
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center glass-light rounded-lg overflow-hidden card-improved">
          {/* ntar kalendernya di sini be kalau dah jadi backend */}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&showPrint=0&src=cGVtcGVrcGxnM0BnbWFpbC5jb20&src=Y2xhc3Nyb29tMTAwMDI3NTk0NTUzMjcxMjMxOTM0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAwNDQ5MjMyODU1MzAxMjk0OTg4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1NjM1NTg1NTE0ODk5ODIyMjgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA2MzcwNjk2NDk2NDYwNzEyODIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4OTA0MTIzMzkzNTU5MTgwOTA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YzQyMDEyYzA1MzI4ZTA5M2I0NGI3Y2M5ODBkM2NmNWUzMTU4MzgwMjZlYTUxNTM5YzBkZjkwZjhlNDBlYzg3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237627bb&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%23A79B8E"
            className="w-full h-[100vh] md:h-[70vh] lg:h-[90vh]"
            sandbox="allow-scripts allow-same-origin"
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Calendar

