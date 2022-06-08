import React from "react";
import Image from "next/image";
import { Label } from "../../component";
import LastPara from "../../component/LastPara";
import ThisWeek from "../../component/ThisWeek";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}/news/${params.id}/`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default function Article({ data }) {
  return (
    <div>
      <Image
        layout="responsive"
        width={100}
        height={20}
        objectFit="cover"
        src="/sport.jpg"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 my-4 gap-3">
        <div className="md:col-span-2 col-span-0 space-y-5">
          <Label>{data.title}</Label>
          <LastPara />
          <p className="text-xl">
            ភ្នំពេញ៖ ដូចដែរដឹងស្រាប់ហើយថា តារាចម្រៀង ខេមរៈ សិរីមន្ត ទើបទទួលងារជា
            ឧកញ៉ា កាលពីថ្មីៗនេះ ធ្វើឲ្យកក្រើកចង្កោមសិល្បៈខ្មែរជាខ្លាំង ស្របពេល
            ការងារអចលនទ្រព្យក៏ជោគជ័យ ឡើងងារខ្ពង់ខ្ពស់ហើយនោះ ការងារសិល្បៈក៏រូបលោក
            នៅតែទទួលដូចពេលមុនដដែរ។ ទន្ទឹមនឹង
            ភាពជោគជ័យយ៉ាងត្រចះត្រចង់ដូច្នេះហើយនោះ ក្រឡេកទៅមើលជីវិតគ្រួសារវិញ
            លោកឧកញ៉ា ក៏មានភរិយាស្រស់ស្អាត គួរឲ្យស្រឡាញ់ និងកូនៗគួរឲ្យខ្នាញ់ផងដែរ
            ជាពិសេស លោកតែងតែ បង្ហាញនូវភាពផ្អែមល្ហែម ជាមួយនឹងភរិយា
            ធ្វើឲ្យមហាជនស្ងប់ស្ងែងពីជីវិតឯកជនរបស់រូបលោកជាខ្លាំង។
          </p>
          <div>
            <Image
              layout="responsive"
              width={100}
              height={50}
              objectFit="cover"
              src="/sport.jpg"
            />
          </div>

          <p className="text-xl">
            ភ្នំពេញ៖ ដូចដែរដឹងស្រាប់ហើយថា តារាចម្រៀង ខេមរៈ សិរីមន្ត ទើបទទួលងារជា
            ឧកញ៉ា កាលពីថ្មីៗនេះ ធ្វើឲ្យកក្រើកចង្កោមសិល្បៈខ្មែរជាខ្លាំង ស្របពេល
            ការងារអចលនទ្រព្យក៏ជោគជ័យ ឡើងងារខ្ពង់ខ្ពស់ហើយនោះ ការងារសិល្បៈក៏រូបលោក
            នៅតែទទួលដូចពេលមុនដដែរ។ ទន្ទឹមនឹង
            ភាពជោគជ័យយ៉ាងត្រចះត្រចង់ដូច្នេះហើយនោះ ក្រឡេកទៅមើលជីវិតគ្រួសារវិញ
            លោកឧកញ៉ា ក៏មានភរិយាស្រស់ស្អាត គួរឲ្យស្រឡាញ់ និងកូនៗគួរឲ្យខ្នាញ់ផងដែរ
            ជាពិសេស លោកតែងតែ បង្ហាញនូវភាពផ្អែមល្ហែម ជាមួយនឹងភរិយា
            ធ្វើឲ្យមហាជនស្ងប់ស្ងែងពីជីវិតឯកជនរបស់រូបលោកជាខ្លាំង។
          </p>
          <div>
            {" "}
            <Image
              layout="responsive"
              width={100}
              height={50}
              objectFit="cover"
              src="/sport.jpg"
            />
          </div>
          <div>
            <Image
              layout="responsive"
              width={100}
              height={50}
              objectFit="cover"
              src="/sport.jpg"
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              layout="responsive"
              width={50}
              height={100}
              objectFit="cover"
              src="/sport.jpg"
            />
          </div>
          <div>
            <Label>អត្ថបទទាក់ទង</Label>
            <ThisWeek />
            <ThisWeek />
            <ThisWeek />
            <ThisWeek />
            <ThisWeek />
          </div>
        </div>
      </div>
      <div>
        <Image
          layout="responsive"
          width={100}
          height={20}
          objectFit="cover"
          src="/sport.jpg"
        />
      </div>
    </div>
  );
}
