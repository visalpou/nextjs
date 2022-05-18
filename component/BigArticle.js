import React from 'react'
import { CalendarIcon , ClockIcon } from '@heroicons/react/solid'

function BigArticle({
    title,
    image,
    date,
    time,
    topic,
    author
}) {
  return (
    <div className="lg:col-span-2 md:col-span-1 article_img rounded-md">
        <h1 className="big_article_title">ស្អាតម្ល៉េះទេលោក! មួយឈុតនេះ ស្រីនា សមខ្លាំង ឡេីងស្លីមខ្លាំង</h1>
        <article className="p-3 space-y-2">      
            <div className="flex items-center gap-2">
            <h3 className="text-sm border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
            <h4 className="text-sm">Written by <span className="font-bold text-lg text-primary-100">Summer</span> </h4>
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
  )
}

export default BigArticle