import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import env from "./../env";
import Image from "next/image";
import Link from "next/link";
import {
  CardTitle,
  CardDesc,
  Author,
  Dateformat,
  NewsType,
  Timeformat,
  Label,
} from "../component";

export const getServerSideProps = async () => {
  const res = await fetch(`${env.apiUrl}/news`);
  console.log(env.apiUrl);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default function Index({ data }) {
  return (
    <div>
      {/* advertising */}
      <Image
        layout="responsive"
        width={100}
        height={20}
        objectFit="cover"
        src="/sport.jpg"
      />
      {/* end advertising */}
      <div className="grid md:grid-cols-3 gap-5 my-5">
        <div className="md:col-span-2 xs:col-span-1 shadow-lg relative">
          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: "url('/team.jpg')", height: "330px" }}
          >
            <div
              className="absolute bg-fixed bottom-0 overflow-hidden w-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex items-center h-full">
                <article className="text-primary-100 space-y-2 p-3">
                  <Link href="/content">
                    <a className="font-bold lg:text-2xl md:text-xl text:sm text-primary-100 hover:text-accent cursor-pointer">
                      ញាក់សាច់ ពេលឃេីញ ផ្ទះលំហែ របស់អ្នកឧកញ៉ា​ សុខ​ គង់​
                      លេីភ្នំបូកគោ ធំស្អាតអស់ទាស់
                    </a>
                  </Link>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm border-2 text-black font-sans py-1 px-2 bg-primary-100 rounded-lg w-auto">
                      កីទ្បា
                    </h3>
                    <h4 className="text-sm text-primary-100 flex items-center">
                      Written by
                      <span className="font-bold text-lg"> &nbsp;Summer</span>
                    </h4>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex gap-2">
                      <CalendarIcon className="w-4" />
                      <span className="text-sm text-white">27-March-2021 </span>
                    </div>
                    <div className="flex gap-2">
                      <ClockIcon className="w-4" />
                      <span className="text-sm text-white">
                        3pm - 18 hour ago
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {data.results.map((item) => {
          return (
            <div
              className="rounded-lg overflow-hidden shadow-lg bg-primary-100"
              key={item.id}
            >
              <Image
                layout="responsive"
                width={100}
                height={50}
                objectFit="cover"
                src={item.thumbnail}
                alt={item.title}
              />
              <article className="p-3 space-y-2">
                <div className="space-y-2">
                  <CardTitle length={40} slug={`/article/${item.id}`}>
                    {item.title}
                  </CardTitle>
                  <CardDesc length={90} dot="....">
                    {item.description}
                  </CardDesc>
                </div>
                <div className="flex items-center gap-2">
                  <NewsType> Sport </NewsType>
                  <h4 className="text-sm">
                    Written by <Author slug={`/author/${item.id}`}>{item.author}</Author>
                  </h4>
                </div>
                <div className="flex w-full">
                  <Dateformat>{item.created_at}</Dateformat>
                  <div className="flex gap-2">
                    <Timeformat>{item.created_at}</Timeformat>
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
          {data.results.map((item) => {
            return (
              <div className="grid lg:grid-cols-2 mb-5" key={item.id}>
                <Image
                  layout="responsive"
                  width={100}
                  height={50}
                  objectFit="cover"
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-lg"
                />
                <article className="lg:p-3 p-0 lg:pt-0 md:pt-3 pt-3 space-y-2">
                  <div className="space-y-2">
                    <CardTitle slug={`/article/${item.id}`} length={60}>
                      {item.title}
                    </CardTitle>
                    <CardDesc length={80} dot="....">
                      {item.description}
                    </CardDesc>
                  </div>
                  <div className="flex items-center gap-2">
                    <NewsType>Sport</NewsType>
                    <h4 className="text-sm">
                      Written by{" "}
                      <Author slug={`/author/${item.id}`}>{item.author}</Author>
                    </h4>
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
            {data.results.map((item) => {
              return (
                <div className="grid grid-cols-2 gap-2 my-4" key={item.id}>
                  <div>
                    <Image
                      src={item.thumbnail}
                      width={1000}
                      height={600}
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <article className="space-y-1 mb-3">
                      <div>
                        <CardTitle slug={`/article/${item.id}`} length={18}>
                          {item.title}
                        </CardTitle>
                        <CardDesc length={30} dot="....">
                          {item.description}
                        </CardDesc>
                      </div>
                      <div>
                        <h4 className="text-sm">
                          Written by <Author slug={`/author/${item.id}`}>{item.author}</Author>
                        </h4>
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
}
