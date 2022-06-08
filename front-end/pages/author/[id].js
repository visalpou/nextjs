import React from "react";
import { Author } from "../../component";
import Image from "next/image";
import { NewsType, CardDesc, CardTitle } from "../../component";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}/news/${params.id}/`);
  const data = await res.json();
 
  return {
    props: {
      data: data,
    },
  };
};

export default function Writer({ data }) {
  return (
    <>
      <Author css="text-2xl font-bold">{data.author}</Author>
      <p className="text-lg py-3">
        សួស្តីប្រិយមិត្ត Teayball ជាទីគោរពរាប់អាន! ខ្ញុំឈ្មោះ
        <Author css="text-lg mx-1">{data.author}</Author>
        ជាបុគ្គលិកកំពុងបម្រើការងារសរសេរព័ត៌មាននៅក្នុងគេហទំព័រ
      </p>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
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
              <div className="space-y-2">
                <CardTitle slug="/" length={60}>
                  sadsadasd
                </CardTitle>
                <CardDesc length={80} dot="....">
                  dasdsads
                </CardDesc>
              </div>
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
                  <span className="text-sm font-semibold">
                    3pm - 18 hour ago{" "}
                  </span>
                </div>
              </div>
              <CardDesc length={100} dot={""}>
                អ្នកទស្សនាអៀនជំនួស ក្រោយឃើញវីដេអូដ៏ផ្អែមល្ហែមរបស់ ឧកញ្ញា៉ ខេមរៈ
                សិរីមន្ត និងភរិយា​ បែបនេះ។
              </CardDesc>
            </article>
          </div>
        </div>
        <div>
          <Image
            layout="responsive"
            width={80}
            height={150}
            objectFit="cover"
            src="/sport.jpg"
            alt="sport"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
