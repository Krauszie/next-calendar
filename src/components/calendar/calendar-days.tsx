import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type CalendarDaysProps = {
  currentDate: Date;
  onDateClick: (date: string) => void;
};

const generateDays = (currentDate: Date) => {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayCurrentMonth = new Date(year, month, 1);
  const totalDaysCurrentMonth = new Date(year, month + 1, 0).getDate();
  const totalDaysPrevMonth = new Date(year, month, 0).getDate();
  const startDay = firstDayCurrentMonth.getDay();

  const days = [];

  // Previous month's overflow
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      day: totalDaysPrevMonth - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, totalDaysPrevMonth - i).toISOString(),
      id: crypto.randomUUID(),
    });
  }

  // Current month
  for (let day = 1; day <= totalDaysCurrentMonth; day++) {
    days.push({
      day,
      isCurrentMonth: true,
      date: new Date(year, month, day).toISOString(),
      id: crypto.randomUUID(),
    });
  }

  // Next month's overflow
  const remainingDaysInRow = 7 - (days.length % 7);
  for (let day = 1; day <= remainingDaysInRow; day++) {
    days.push({
      day,
      isCurrentMonth: false,
      date: new Date(year, month + 1, day).toISOString(),
      id: crypto.randomUUID(),
    });
  }

  return days;
};

const CalendarDays = ({ currentDate, onDateClick }: CalendarDaysProps) => {
  const days = generateDays(currentDate);
  // I'm taking the event data to mark date that has event
  const events = useSelector((state: RootState) => state.events.events);

  // Today date in localeDateString
  const today = new Date();
  const todayString = today.toLocaleDateString("en-GB");

  return (
    <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium px-5">
      {/* Weekdays */}
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
        <div key={dayName} className="text-tertiary">
          {dayName}
        </div>
      ))}

      {/* Days */}
      {days.map(({ day, isCurrentMonth, date, id }) => {
        // check if there are any events associated with a specific date, .some returns boolean
        const hasEvents = events.some((event) => event.date === date);
        const formattedDate = new Date(date).toLocaleDateString("en-GB");
        const isToday = formattedDate === todayString;
        const dayOfWeek = new Date(date).getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        return (
          <div
            key={id}
            onClick={() => onDateClick(date)}
            className={`p-4 font-bold sm:font-extrabold text-l sm:text-xl cursor-pointer rounded-lg py-5
              ${isCurrentMonth && "bg-accent hover:ring-2 hover:ring-blue-300"}
              ${!isCurrentMonth && "bg-gray-200 text-gray-500"}

              ${hasEvents && "bg-green-400"}
              ${isToday && "border-2 border-red-500 bg-blue-500"}
              ${isWeekend && "text-red-500"}
            `}
          >
            <span className="top-0">{day}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDays;
