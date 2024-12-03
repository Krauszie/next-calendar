// DISCLAIMER: THIS PAGE USING TEMPLATE FROM OLD PROJECTS

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const assignments = [
  {
    num: "01",
    title: "Calendar UI (Disclaimer This page use Template from Old projects)",
    description:
      "Display a monthly calendar grid, Highlight Today, and Mark date if there is an event",
    href: "",
  },
  {
    num: "02",
    title:
      "Event Management (Disclaimer This page use Template from Old projects)",
    description:
      "Date can be clicked to show an event. The event can be created, edited, or deleted.",
    href: "",
  },
  {
    num: "03",
    title:
      "Data Storage & Persistence (Disclaimer This page use Template from Old projects)",
    description:
      "Implement local storage so it can be refreshed and the data (events) still there!",
    href: "",
  },
  {
    num: "04",
    title: "Navigation (Disclaimer This page use Template from Old projects)",
    description:
      "User can go to the next or previous month without reloading the page.",
    href: "",
  },
];

const AssignmentPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {assignments.map((task, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {task.num}
                  </div>
                  <Link
                    href={task.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {task.title}
                </h2>

                {/* description */}
                <p className="text-white/60 text-xl">{task.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AssignmentPage;
