import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Main FullCalendar component
import dayGridPlugin from "@fullcalendar/daygrid"; // Month and day grid views
import timeGridPlugin from "@fullcalendar/timegrid"; // Week and day views with time slots
import interactionPlugin from "@fullcalendar/interaction"; // Drag-and-drop and date selection
import listPlugin from "@fullcalendar/list"; // List view of events
import {
  EventClickArg,
  DateSelectArg,
  EventApi,
  EventInput
} from "@fullcalendar/core"; // Correct types
import Interfaces from "./interfaces";

const Calendar = ({ dark_mode = false }) => {
  const [events, setEvents] = useState<EventInput[]>([]);

  // Handle adding a new event
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Please enter a title for the event");
    const calendarApi = selectInfo.view.calendar;

    if (title) {
      calendarApi.addEvent({
        id: String(Math.random()), // Generate a unique ID
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  // Handle event click
  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  // Handle event change (e.g., drag-and-drop)
  const handleEvents = (events: EventApi[]) => {
    setEvents(events.map((event) => ({ ...event.toPlainObject() })));
  };

  return (
    <Interfaces heading="Calendar" dark_mode={dark_mode} links={
        <div className="d-flex gap-3">
            <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/plugins">Plugins</a>
        </div>
    }>
        <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
            <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Full Calendar</h6>
            <hr style={{ marginTop: "0" }} />
            <div className="p-4">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    events={events}
                    eventsSet={handleEvents}
                    headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                    }}
                    height="auto"
                />
            </div>
        </div>
    </Interfaces>
  );
};

export default Calendar;