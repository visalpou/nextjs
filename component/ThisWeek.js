import React from 'react'
import { CalendarIcon , ClockIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function ThisWeek() {
  return (
    <div>
    <div>
        <Image src="/team.jpg"  width={1000} height={600} objectFit="cover" />
    </div>
    <div>
        <h1 className="text-2xl font-semibold my-3">ប្រចាំសប្តាហ៍</h1>
        <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg weekend_img"></div>
            <div>
                <article className="space-y-2 mb-3">
                <div>
                    <a className="font-semibold text-lg dark:text-white hover:text-primary-100 cursor-pointer">ខ្ចិលប្រើឆ័ត្រពេលភ្លៀង!</a>
                    <p className="text-sm">បុរសម្នាក់អាយុ៤២ឆ្នាំ បានចំណាយពេល២ឆ្នាំ ...</p>
                </div>      
                <div className="flex items-center gap-2">
                    <h3 className="text-xs border-2 text-white p-1 bg-primary-100 rounded-lg w-auto">កីទ្បា</h3>
                    <h4 className="text-xs">Written by <span className="font-bold text-xs text-primary-100">Summer</span> </h4>
                </div>
                <div className="gap-5">
                    <div className="flex gap-2">
                        <CalendarIcon className="w-4" />
                        <span className="text-xs font-semibold">27-March-2021 </span>
                    </div>
                    <div className="flex gap-2">
                        <ClockIcon className="w-4" />
                        <span className="text-xs font-semibold">3pm - 18 hour ago </span>
                    </div>                
                </div>
                </article>     
            </div>
        </div>
    </div>
    <div>
        <Image src="/nfl.jpg"  width={1000} height={600} objectFit="cover" />
    </div>
    </div>
  )
}

export default ThisWeek