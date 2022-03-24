import Head from 'next/head'
import env from '../../env'
import { BiTime } from 'react-icons/bi'
import { GiEmptyHourglass } from 'react-icons/gi'
import { cutSting, formateDate } from '../../utils'
import Aside from '../../components/Aside'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export async function getServerSideProps({ params }) {
    const response = await fetch(`${env.apiUrl}/category/${params.category}`)
    const cate = await response.json()
    return {
        props: {
            cate,
        },
    }
}

const Category = ({ cate }) => {
    const { data, teayball, ads } = cate
    return <>
        <Head>
            <title>Teay Ball</title>
            <meta name="keywords" content="haha855, aa2888, sbs369, khmercasino, HAHA855, 2888new, Khmerloto" />
            <meta name="theme-color" content="#333" />
            <meta name="description" content="" />
            <meta property="og:title" content="Haha855 " />
            <meta property="og:description" content="ពិន្ទុបាល់ ព័ត៌មានកីឡា ផ្សាយផ្ទាល់ការប្រកួត" />
            <meta property="og:image" content="http://haha855.com/images/logo.png" />
            <meta property="og:url" content="http://haha855.com" />
            <meta name="twitter:card" content="" />
            <meta name="og:site_name" content="Haha855" />
            <meta property="fb:app_id" content="your_app_id" />
            <meta name="twitter:site" content="@website-username" />
        </Head>
        <div className="container mx-auto md:max-w-6xl px-2 mt-22 md:mt-4 md:px-0">
            <div className="grid grid-flow-row grid-row-1 md:grid-row-2 md:gap-5 gap-2 md:grid-flow-col">
                <conten>
                    {
                        data.length != 0 ? <> <div className="my-4 flex space-between relative overflow-hidden rounded-full">
                            <span className="bg-yellow-500 text-white py-3 px-5 inline-block rounded-full font-extrabold">{data[0].category}</span>
                        </div>
                            <div className="grid md:grid-cols-1 md:gap-2 gap-2 grid-cols-2 grid-flow-row w-full">
                                {
                                    data && data.map((item, key) => {
                                        return <div key={key} className="md:h-36 flex flex-col md:flex-row">
                                            <div className="min-w-200 rounded-xl overflow-hidden">
                                                <Image placeholder="blur" blurDataURL={env.mediaURL + item.image} src={env.mediaURL + item.image} width="100%" height="80%" objectFit="cover" layout="responsive" alt={item.title} />
                                            </div>
                                            <Link href={`/article/${item.id}`}><h1 className="text-sm md:text-lg text-gray-900 hover:underline cursor-pointer md:hidden mt-1 md:mt-0">{cutSting(item.title)}</h1></Link>
                                            <div className="mx-3 hidden md:block">
                                                <Link href={`/article/${item.id}`}><h1 className="text-lg text-gray-900 hover:underline cursor-pointer ">{item.title}</h1></Link>
                                                <span className="flex flex-row mt-2 items-center">
                                                    <BiTime className="text-gray-900" size={20} /> <span className="px-2">{formateDate(item.created_at, 'LLL')}</span>
                                                </span>
                                                <description className="mt-2 font-light text-sm">{cutSting(item.description, 100)}</description>
                                            </div>

                                        </div>
                                    })
                                }
                            </div> </> : <div className="justify-center flex my-40 flex-col items-center">
                            <GiEmptyHourglass className="text-gray-700" size={100} />
                            <p className="py-7 text-lg">Not Have Article in this category</p>
                        </div>

                    }

                </conten>
                <aside>
                    <Aside teayball={teayball} zone2={ads} />
                </aside>
            </div>
        </div>
    </>
}


export default Category;