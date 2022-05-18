import Slide from "../component/Slide";
import { CalendarIcon, ClockIcon, TemplateIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { CardTitle,CardDesc,Author } from "../component";

export const getServerSideProps = async () => {
  const res = await fetch("http://192.168.1.177:8000/api/news/");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

// var data = [
//   {
//     title: "ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!",
//     description: "hello worlsadkf",
//     date: "27-March-2021",
//     time: "3pm - 18 hour ago",
//     img: "/sport.jpg",
//   },
//   {
//     title: "ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!",
//     description: "hello worlsadkf",
//     date: "27-March-2021",
//     time: "3pm - 18 hour ago",
//     img: "/sport.jpg",
//   },
//   {
//     title: "ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!",
//     description: "hello worlsadkf",
//     date: "27-March-2021",
//     time: "3pm - 18 hour ago",
//     img: "/sport.jpg",
//   },
//   {
//     title: "ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!",
//     description: "hello worlsadkf",
//     date: "27-March-2021",
//     time: "3pm - 18 hour ago",
//     img: "/sport.jpg",
//   },
// ];

export default function Index({data}) {
  console.log(data);
  return (
    <div className="lg:mx-0 md:mx-5 mx-5">
      <Slide />
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
        {data.results.map((item, index) => {
          return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
                    <CardTitle slug="/" >{item.title}</CardTitle>
                    <CardDesc> {item.description} </CardDesc>
                </div>      
                <div className="flex items-center gap-2">
                <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">sport</h3>
                <Author> {item.author} </Author>
                </div>
                <div className="flex gap-5">
                    <div className="flex gap-2">
                        <CalendarIcon className="w-4" />
                        <span className="text-sm font-semibold">27-March-2021 </span>
                    </div>
                    <div className="flex gap-2">
                        <ClockIcon className="w-4" />
                        <span className="text-sm font-semibold">{item.created_at}</span>
                    </div>                
                </div>
            </article>   
              
            </div>
          );
        })}
      </div>
    </div>
    //     <LastPara/> */}
  );
}
