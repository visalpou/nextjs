import React from "react";
import env from '../../env'
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import {
  CardTitle,
  CardDesc,
  Author,
  Dateformat,
  NewsType,
  Timeformat,
  Label,
} from "../../component";
export async function getServerSideProps({ params }) {
  const data = await fetch(`${process.env.API_URL}/news/?topics__name=${params.slug}`)
  const news = await data.json();
  console.log(news);
  return {
    props: {
      news: news.results,
    },
  };
}

const CategoryDetail = ({ news }) => {
  return (
    <div className="lg:mx-0 md:mx-5 mx-5">
      <Image
        layout="responsive"
        width={100}
        height={20}
        objectFit="cover"
        src="/sport.jpg"
      />
      <div className="grid md:grid-cols-3 gap-5 my-5">
        <div className="md:col-span-2 xs:col-span-1  rounded-md big_artical px-10">
          <Image src="/team.jpg" className="big_artical_image" layout="fill" />
          <article className="desc space-y-2">
            <div>
              <a className="font-semi bold text-xl hover:text-primary-100 cursor-pointer">
                ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!
              </a>
              <p className="text-sm dark:text-black font-semibold">
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
        {news.map((item) => {
          return (
            <div
              className="max-w-sm rounded-lg overflow-hidden shadow-lg"
              key={item.id}
            >
              <Image
                layout="responsive"
                width={100}
                height={50}
                objectFit="cover"
                src="/sport.jpg"
                alt={item.title}
              />
              <article className="p-3 space-y-2">
                <div className="space-y-2">
                  <CardTitle slug="/noslug">{item.title}</CardTitle>
                  <CardDesc>{item.description}</CardDesc>
                </div>
                <div className="flex items-center gap-2">
                  <NewsType> Sport </NewsType>
                  <Author>{item.author}</Author>
                </div>
                <div className="flex w-full">
                  <Dateformat>{item.created_at}</Dateformat>
                  <div className="flex gap-2">
                    <Timeformat>{item.update_at}</Timeformat>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <Label>អត្ថបទចុងក្រោយ</Label>
      <div className="grid lg:grid-cols-3 gap-5 article mb-5">
        {/* អត្ថបទចុងក្រោយ */}
        <div className="md:col-span-2 col-span-0">
          {news.map((item) => {
            return (
              <div className="grid lg:grid-cols-2 mb-5">
                <Image
                  layout="responsive"
                  width={100}
                  height={50}
                  objectFit="cover"
                  src="/sport.jpg"
                  alt={item.title}
                  className="rounded-lg"
                />
                <article className="p-3 space-y-2">
                  <div className="space-y-2">
                    <CardTitle slug="/noslug">{item.title}</CardTitle>
                    <CardDesc>{item.description}</CardDesc>
                  </div>
                  <div className="flex items-center gap-2">
                    <NewsType>Sport</NewsType>
                    <Author>{item.author}</Author>
                  </div>
                  <div className="flex gap-5">
                    <Dateformat>{item.created_at}</Dateformat>
                    <Timeformat>{item.update_at}</Timeformat>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        {/* end អត្ថបទចុងក្រោយ */}
        {/* this week */}
        <div>
          {/* advertising */}
          <div>
            <Image
              src="/team.jpg"
              width={1000}
              height={600}
              objectFit="cover"
            />
          </div>
          {/* end advertising */}
          <div>
            <Label>អត្ថបទប្រចាំសប្តាហ៍</Label>
            {news.map((item) => {
              return (
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div>
                    <Image
                      src="/team.jpg"
                      width={1000}
                      height={600}
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <article className="space-y-2 mb-3">
                      <div>
                        <CardTitle slug="/noslug">ញាក់សាច់!</CardTitle>
                        <CardDesc>
                          មកដឹងពីតម្លៃសំបុត្រចូលរួមទស្សនាការប្រកួតប្រដាល់របស់Floyd
                        </CardDesc>
                        <Author>{item.author}</Author>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
          {/* advertising */}
          <div>
            <Image src="/nfl.jpg" width={1000} height={600} objectFit="cover" />
          </div>
          {/* end advertising */}
        </div>
        {/* end this week */}
      </div>
    </div>
  );
};

export default CategoryDetail;
