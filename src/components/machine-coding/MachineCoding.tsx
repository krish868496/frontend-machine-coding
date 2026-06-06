import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const machineCodingRoutes = [
  { path: "/machine-coding/todos", label: "Todos" },
  { path: "/machine-coding/holy-grail", label: "Holy Grail" },
  { path: "/machine-coding/tabs", label: "Tabs" },
  { path: "/machine-coding/accordion", label: "Accordion" },
  { path: "/machine-coding/star-rating", label: "Star Rating" },
  { path: "/machine-coding/carousel", label: "Carousel" },
  { path: "/machine-coding/pagination", label: "Pagination" },
  { path: "/machine-coding/infinite-scroll", label: "Infinite Scroll" },
  { path: "/machine-coding/progress-bar", label: "Progress Bar" },
  { path: "/machine-coding/config-color-boxes", label: "Color Boxes" },
  { path: "/machine-coding/post-with-comments", label: "Post Comments" },
  {
    path: "/machine-coding/post-with-nested-comments",
    label: "Post Nested Comments",
  },
  { path: "/machine-coding/tic-tac-toe", label: "Tic Tac Toe" },
  {
    path: "/machine-coding/match-similar-tiles",
    label: "Matching Similar Tiles",
  },
  {
    path: "/machine-coding/config-driven-form",
    label: "Config Driven Form",
  },
  {
    path: "/machine-coding/toast",
    label: "Toast",
  },
  {
    path: "/machine-coding/nested-folder",
    label: "Nested Folder",
  },
];

const MachineCoding = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between flex-wrap items-center gap-4 px-5 py-3">
        <Link
          to={"/machine-coding"}
          className="text-2xl leading-8 font-semibold text-gray-950  "
        >
          Machine Coding Questions
        </Link>
        <div className="flex items-center flex-wrap gap-5">
          {machineCodingRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-lg leading-6 font-semibold ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-amber-500"
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MachineCoding;
