type CalendarHeaderProps = {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
};

const CalendarHeader = ({
  currentDate,
  onPrevious,
  onNext,
}: CalendarHeaderProps) => {
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="flex justify-between items-center mb-4 px-5 text-accent">
      <button onClick={onPrevious} className="text-blue-500">
        &lt; Previous
      </button>
      <h2 className="text-xl lg:text-2xl font-bold">
        {month} {year}
      </h2>
      <button onClick={onNext} className="text-blue-500">
        Next &gt;
      </button>
    </div>
  );
};

export default CalendarHeader;
