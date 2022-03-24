import Head from 'next/head'
import env from './../env'
import { cutSting } from './../utils'
import Link from 'next/link'
import Aside from '../components/Aside'
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
export async function getServerSideProps() {
  const response = await fetch(`${env.apiUrl}/home`)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
export default function index({ data }) {
  const { isbreak, articlebycate, teayball, ads, seo } = data
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="keywords" content={seo.sitekeyword} />
        <meta name="theme-color" content="#333" />
        <link rel="icon" href={env.mediaURL + seo.icon} />
        <meta name="description" content={seo.descrtiption_site} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={seo.descrtiption_site} />
        <meta property="og:image" content={env.mediaURL + seo.image_site} />
        <meta property="og:url" content={env.appUrl} />
        <meta name="og:site_name" content={seo.title} />
      </Head>
      {/* Mobile */}
      <section className="md:hidden mt-20 md:mt-4 md:px-4 px-2">
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          navigation
          zoom
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            isbreak.map((item, key) => {
              return <SwiperSlide key={key}>
                <div className={`rounded-xl overflow-hidden main-news row-span-1 h-48`}>
                  <div className=" transition duration-500 ease-in-out h-full relative">
                    <a href={`/article/${item.id}`} > <h1 className="text-white absolute bottom-2 left-3 font-medium z-10 text-xl leading-relaxed hover:underline cursor-pointer">{key == 0 ? cutSting(item.title, 100) : cutSting(item.title, 70)}</h1></a>
                    <a href={`/category/${item.cateslug}`} > <span className={`absolute bg-yellow-500 text-white py-2 px-5 rounded-full left-4 top-4 z-10 text-xs`}>{item.category}</span></a>
                    <span className="w-full h-2/4 absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 rounded-xl "></span>
                    <Image placeholder="blur" blurDataURL={env.mediaURL + item.image} src={env.mediaURL + item.image} width={200} height={110} layout="responsive" objectFit="cover" alt={item.title} />
                  </div>
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>


      </section>
      <div className="container mx-auto max-w-6xl md:px-4 px-2 lg:p-0">
        {/* Destop */}
        <section className="h-550 mt-4 grid-rows-3 gap-5 grid-flow-col hidden md:grid">
          {
            isbreak.map((item, key) => {
              return <div key={key} className={`rounded-xl overflow-hidden main-news ${key == 0 ? 'row-span-2 col-span-2' : ''} ${key == 1 || key == 2 ? 'row-span-1' : ''}`}>
                <div className="transition duration-500 ease-in-out h-full relative">
                  <Image placeholder="blur" blurDataURL={env.mediaURL + item.image} src={env.mediaURL + item.image} width={200} height={110} layout="responsive" objectFit="cover" alt={item.title} />
                  <a href={`/article/${item.id}`} > <h1 className="text-white absolute bottom-2 left-3 font-medium z-10 text-xl leading-relaxed hover:underline cursor-pointer">{key == 0 ? cutSting(item.title, 100) : cutSting(item.title, 70)}</h1></a>
                  <a href={`/category/${item.cateslug}`} > <span className={`absolute bg-yellow-500 text-white py-2 px-5 rounded-full left-4 top-4 z-10 text-xs`}>{item.category}</span></a>
                  <span className="w-full h-2/4 absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 rounded-xl "></span>

                </div>
              </div>
            })
          }
        </section>

        <main className="grid grid-flow-row grid-col-3 md:grid-row-2 md:gap-5 md:grid-flow-col">
          <div className="row-span-1">
            {
              articlebycate.map((item, key) => {
                if (item.data.length === 0) {
                  return ''
                }
                return <section key={key}>
                  <div className="my-4 flex space-between relative overflow-hidden rounded-full bg-gradient-to-r from-yellow-500">
                    <span className="bg-yellow-500 text-white py-3 px-5 inline-block rounded-full font-extrabold">{item.name}</span>
                    <span className="block absolute right-0 top-0 text-yellow-500 uppercase text-base p-3 font-semibold	">
                      <Link href={`/category/${item.slug}`}>see all</Link>
                    </span>
                  </div>
                  <div className="grid md:grid-cols-4 grid-rows-2 grid-cols-2 grid-flow-col md:gap-4 gap-2 md:grid-rows-1">
                    {
                      item.data && item.data.map((i, key) => {
                        return <div key={key} className="cursor-pointer hover:underline">
                          <a href={`/article/${i.id}`}>
                            <Fragment>
                              <div className="h-32 rounded-xl overflow-hidden">
                                <Image placeholder="blur" blurDataURL={env.mediaURL + i.image} src={env.mediaURL + i.image} width="100%" height="100%" layout="responsive" objectFit="cover" alt={i.title} />
                              </div>
                              <h3 className="block pt-2">{cutSting(i.title)}</h3>
                            </Fragment>
                          </a>
                        </div>
                      })
                    }
                  </div>
                </section>
              })
            }
          </div>
          <Aside teayball={teayball} zone2={ads} />
        </main>
      </div>
    </>
  )
}
