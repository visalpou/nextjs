import React from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import ThisWeek from "./ThisWeek";

const LastPara = ({
  
}) => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-5 article mb-5">
      <div className="md:col-span-2 col-span-0">
        {/* big article */}
        <div className="lg:col-span-2 md:col-span-1 article_img rounded-md"></div>
        {/* small article */}
        <div className="rounded-md grid lg:grid-cols-2">
          <div className="last_card rounded-lg"></div>
          <article className="p-3 space-y-2">
            <div className="space-y-2">
              <a className="font-semibold text-xl dark:text-white hover:text-primary-100 cursor-pointer">
                ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!
              </a>
              <p className="text-sm">
                បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ
                ក្នុងការជីកដីជម្រៅ៣ម៉ែត្រ និងប្រវែង១២ម៉ែត្រពីផ្ទះរបស់គាត់
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">
                កីទ្បា
              </h3>
              <h4 className="text-sm">
                Written by{" "}
                <span className="font-bold text-lg text-primary-100">
                  Summer
                </span>{" "}
              </h4>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <CalendarIcon className="w-4" />
                <span className="text-sm font-semibold">27-March-2021 </span>
              </div>
              <div className="flex gap-2">
                <ClockIcon className="w-4" />
                <span className="text-sm font-semibold">
                  3pm - 18 hour ago{" "}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* this week */}
      <ThisWeek />
    </div>
  );
};

export default LastPara;
