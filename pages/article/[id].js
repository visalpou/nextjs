import React from "react";
import Image from "next/image";

import { Label } from "../../component";

export const getServerSideProps = async ({ params }) => {
  console.log(process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}/news/${params.id}/`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};


export default function Article({data}) {
  return (
    <div>
      <Image
        layout="responsive"
        width={100}
        height={20}
        objectFit="cover"
        src="/sport.jpg"
      />
      <div className="grid grid-cols-3">
        <div className="md:col-span-2 col-span-0">
            <Label>{data.title}</Label>
        </div>
        <div>
            1
        </div>
      </div>
    </div>
  );
}
