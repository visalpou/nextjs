import { CalendarIcon } from "@heroicons/react/solid";
import Link from "next/link";
const Label = ({ children }) => {
  return <h1 className="text-2xl font-semibold my-3 ml-3"> {children} </h1>;
};

const CardTitle = ({ children, slug = "noslug" }) => {
  return (
    <div className="font-semibold text-xl hover:text-primary-100 cursor-pointer">
      <Link href={slug}>
        <a>{children}</a>
      </Link>
    </div>
  );
};
const CardDesc = ({children}) => {
  return (
    <p className="text-sm dark:text-black font-semibold">
      {children}
    </p>
  );
};
const Dateformat = ({ date }) => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <CalendarIcon className="w-4" />
        {/* <span className="text-sm font-semibold">{moment(date).format('DD-MM-YYYY')} </span> */}
      </div>
    </div>
  );
};
const Author = ({children}) => {
    return (
        <h4 className="text-sm">Written by <span className="font-bold text-lg text-primary-100">{children}</span> </h4>
    )
}

export { Label, Dateformat, CardTitle , CardDesc , Author };
