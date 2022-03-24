import env from './../env'
import { formateDate } from './../utils'
import Link from 'next/link'
import Image from 'next/image'
const Aside = ({ teayball, zone2 }) => {
    return <div className="row-span-1 md:w-full md:p-0 px-2">
        <div className="my-4 flex space-between relative overflow-hidden rounded-full bg-gradient-to-r from-yellow-500">
            <span className="bg-yellow-500 text-white py-3 px-5 inline-block rounded-full font-extrabold">ការទស្សន៍ទាយ</span>
        </div>
        {
            teayball.map((i, key) => {
                return <div key={key} className="flex rounded-xl justify-between my-4 bg-gray-200 p-2 pb-16">
                    <div className="flex flex-col justify-center items-center relative">
                        <div className="h-24 w-24 rounded-full overflow-hidden">
                            <Image placeholder="blur" blurDataURL={env.mediaURL + i.home_logo} src={env.mediaURL + i.home_logo} width={96} height={96} layout="responsive" objectFit="cover" alt={i.home} />
                        </div>
                        <h4 className="py-2 text-gray-900 font-medium text-lg absolute top-24 text-center">{i.home}</h4>
                    </div>
                    <div className=" justify-center items-center rounded-full flex flex-col">
                        <span className="bg-yellow-200 text-yellow-500 font-semibold text-lg py-1 px-4 rounded-full">{i.home_point}:{i.away_point}</span>
                        <span className="pt-2 px-2">{formateDate(i.play_time, 'L')}</span>
                        <span>{formateDate(i.play_time, 'LT')}</span>
                    </div>

                    <div className="flex flex-col justify-center items-center relative">
                        <div className="h-24 w-24 rounded-full overflow-hidden">
                            <Image placeholder="blur" blurDataURL={env.mediaURL + i.away_logo} src={env.mediaURL + i.away_logo} width={96} height={96} layout="responsive" objectFit="cover" alt={i.away} />

                        </div>
                        <h4 className="py-2 text-gray-900 font-medium text-lg absolute top-24 text-center">{i.away}</h4>
                    </div>
                </div>
            })
        }

        <div>
            {
                zone2.map((i, key) => {
                    return <div key={key} className="w-full">
                        <Link className="w-full block" href={i.ads_content}>
                            <Image placeholder="blur" blurDataURL={env.mediaURL + i.ads_image} className="cursor-pointer w-full" src={env.mediaURL + i.ads_image} width={320} height={290} layout="responsive" alt="Right ads" />
                        </Link>
                    </div>
                })
            }

        </div>
    </div>

}
export default Aside;