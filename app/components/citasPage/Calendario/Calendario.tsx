import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/es';

dayjs.locale('es');

export const Calendario = () => {
  
  const localizer = dayjsLocalizer(dayjs);
  
  const mensajes = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento', // Personaliza otros mensajes según sea necesario
  };


  const events = [
    {
      title: "John Doe",
      start: dayjs('2024-03-25T12:00:00').toDate(),
      end: dayjs('2024-03-25T13:00:00').toDate()
    },
    {
      title: "Jane Smith",
      start: dayjs('2024-03-26T14:00:00').toDate(),
      end: dayjs('2024-03-26T15:00:00').toDate()
    },
    {
      title: "Alice Johnson",
      start: dayjs('2024-03-27T10:00:00').toDate(),
      end: dayjs('2024-03-27T11:00:00').toDate()
    }
  ];
  
  return (
    <Calendar
    localizer={localizer}
    events={events}
    messages={mensajes}
    
  />
  );
}