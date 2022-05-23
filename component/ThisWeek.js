import React from "react";
import Image from "next/image";
import { CardTitle, CardDesc, Author } from "./";
function ThisWeek() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 my-4">
        <div>
          <Image
            src="/sport.jpg"
            width={1000}
            height={600}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div>
          <article className="space-y-1 mb-3">
            <div>
              <CardTitle slug="/" length={18}>
                អត្ថបទប្រចាំសប្តាហ៍
              </CardTitle>
              <CardDesc length={60} dot="....">
                safsdafsaf
              </CardDesc>
            </div>
            <div>
              <Author>asfsadf</Author>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ThisWeek;
