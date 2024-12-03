import { useState } from "react";
import { GetServerSideProps } from "next";

// Components
import CalendarHeader from "@/components/calendar/calendar-header";
import CalendarDays from "@/components/calendar/calendar-days";
import EventModal from "@/components/calendar/event-modal";
import EventList from "@/components/calendar/event-list";
import PurgeEventsButton from "@/components/calendar/purge-button";
import LogoutButton from "@/components/shared/logout-button";

type UserItem = {
  role: string | null;
};

const CalendarPage = ({ role }: UserItem) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  return (
    // Note: I want to try to make it go center, When? TBA
    <div className="w-full h-full mx-auto mt-8">
      <h1 className="text-accent mx-5 font-bold">ROLE: {role}</h1>
      <CalendarHeader
        currentDate={currentDate}
        onPrevious={handlePreviousMonth}
        onNext={handleNextMonth}
      />
      <CalendarDays currentDate={currentDate} onDateClick={handleDateClick} />
      {selectedDate && (
        <EventModal date={selectedDate} onClose={handleCloseModal} />
      )}
      <div className="flex w-full">
        <div className="w-full max-w-[700px]">
          <EventList />
        </div>
        <div className="flex-row mx-4 gap-4">
          <PurgeEventsButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const role = ctx.req.cookies.role || null;
  if (!role) {
    return {
      redirect: {
        destination: "/login/login-page",
        permanent: false,
      },
    };
  }
  console.log("testes", role);
  return {
    props: { role }, // Pass role to component
  };
};

export default CalendarPage;
