import Link from "next/link";
import { NavItem } from "../types-components";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about/about-page",
  },
  {
    name: "assignment",
    path: "/calendar/assignment-page",
  },
  {
    name: "login",
    path: "/login/login-page",
  },
  {
    name: "calendar",
    path: "/calendar/calendar-page",
  },
];

export default function Nav({ pathname }: NavItem) {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
