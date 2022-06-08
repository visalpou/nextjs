import React from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Author, CardDesc, NewsType } from ".";
const LastPara = ({}) => {
  return (
    <div className="rounded-md grid lg:grid-cols-2">
      <div>
        <Image
          src="/sport.jpg"
          width={1000}
          height={600}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <article className="p-3 space-y-2">
        <div className="flex items-center gap-2">
          <NewsType>superstar</NewsType>
          <Author>Undertaker</Author>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <CalendarIcon className="w-4" />
            <span className="text-sm font-semibold">27-March-2021 </span>
          </div>
          <div className="flex gap-2">
            <ClockIcon className="w-4" />
            <span className="text-sm font-semibold">3pm - 18 hour ago </span>
           
          </div>
         
        </div>
        <CardDesc length={100} dot={""}>អ្នកទស្សនាអៀនជំនួស ក្រោយឃើញវីដេអូដ៏ផ្អែមល្ហែមរបស់ ឧកញ្ញា៉ ខេមរៈ សិរីមន្ត និងភរិយា​ បែបនេះ។</CardDesc>
      </article>
    </div>
  );
};

export default LastPara;
