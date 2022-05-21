import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import Link from "next/link";
import moment from "moment";

const Label = ({ children }) => {
  return <h1 className="text-3xl text-black font-semibold my-4"> {children} </h1>;
};

const CardTitle = ({ children, slug = "noslug", length }) => {
  return (
    <Link href={slug}>
      <a className="font-semibold text-xl text-black hover:text-accent cursor-pointer">
        {children.slice(0, length)}
      </a>
    </Link>
  );
};

const CardDesc = ({ children, length }) => {
  return (
    <p className="text-sm text-black">
      {children.slice(0, length) + "..."}
    </p>
  );
};

const NewsType = ({ children }) => {
  return (
    <h3 className="text-sm text-black font-sans p-1 bg-accent rounded-lg w-auto">
      {children}
    </h3>
  );
};

const Author = ({ children }) => {
  return (
    <h4 className="text-sm">
      Written by{" "}
      <span className="font-bold text-md text-accent ">{children}</span>
    </h4>
  );
};

const Dateformat = ({ children }) => {
  return (
    <div className="flex gap-2" style={{ width: "45%" }}>
      <div className="flex items-center" style={{ gap: "2px"}}>
        <CalendarIcon className="w-4 text-black" />
        <span className="text-sm text-black">
          {moment(children).format("DD-MM-YYYY")}{" "}
        </span>
      </div>
    </div>
  );
};

const Timeformat = ({ children }) => {
  return (
    <div className="flex gap-2" style={{ width: "55%" }}>
      <div className="flex items-center" style={{ gap: "2px"}}>
        <ClockIcon className="w-4 text-black" />
        <span className="text-sm text-black">
          {moment(children).format("HH:mm")}
        </span>
      </div>
    </div>
  );
};

export { Label, Dateformat, CardTitle, CardDesc, Author, NewsType, Timeformat };
