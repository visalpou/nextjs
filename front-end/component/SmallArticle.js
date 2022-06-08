import React from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import Image from "next/image";	
function SmallArticle() {
  return (
    <div className="rounded-lg grid lg:grid-rows-2 border-2 bg-gray-300">
      <Image
        layout="responsive"
        width={100}
        height={20}
        objectFit="cover"
        src="/sport.jpg"
      />
      <article className="p-3 space-y-2">
        <div className="space-y-2">
          <a className="font-semibold text-xl hover:text-primary-100 cursor-pointer">
            ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!
          </a>
          <p className="text-sm dark:text-black font-semibold">
            បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ ក្នុងការជីកដីជម្រៅ៣ម៉ែត្រ
            និងប្រវែង១២ម៉ែត្រពីផ្ទះរបស់គាត់
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">
            កីទ្បា
          </h3>
          <h4 className="text-sm">
            Written by{" "}
            <span className="font-bold text-lg text-primary-100">Summer</span>{" "}
          </h4>
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
      </article>
    </div>
  );
}

export default SmallArticle;
