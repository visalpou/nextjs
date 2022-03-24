import Link from 'next/link'
import { BiTime } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaRegEye } from 'react-icons/fa'
import Aside from '../../components/Aside'
import { formateDate } from '../../utils'
import env from '../../env'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Image from 'next/image'

export async function getServerSideProps({ params }) {
    const response = await fetch(`${env.apiUrl}/article/${params.article}`)
    const update = await fetch(`${env.apiUrl}/articleview/${params.article}`)
    const data = await response.json()
    const updateData = await update.json()
    return {
        props: {
            data,
            updateData
        },
    }
}


const Article = ({ data }) => {
    const { ads, ads2, ads3, teayball, article } = data
    const router = useRouter()

    return <>
        <Head>
            <title>{article.title}</title>
            <meta name="description" content={article.descrtiption} />
            <meta property="og:title" content={article.title} />
            <meta property="og:description" content={article.descrtiption} />
            <meta property="og:image" content={env.mediaURL + article.image} />
            <meta property="og:url" content={env.appUrl + '/article/' + article.id} />
            <meta name="og:site_name" content={article.title} />
        </Head>
        <div className="container mx-auto max-w-6xl mt-24 md:mt-4">
            <div className="grid grid-flow-row grid-row-1 md:grid-row-2 gap-5 md:grid-flow-col">
                <conten className="py-0 px-3 md:py-4">
                    {
                        ads2.map((i, key) => {
                            return <div key={key} className="w-full mb-2">
                                <Link className="w-full block" href={i.ads_content}>
                                    <Image placeholder="blur" blurDataURL={env.mediaURL + i.ads_image} className="cursor-pointer w-full" src={env.mediaURL + i.ads_image} width={728} height={90} alt="ads" layout="responsive" alt="Right ads" />
                                </Link>
                            </div>
                        })
                    }
                    <h1 className="font-semibold text-xl text-gray-900">{article.title}</h1>
                    <div className="flex justify-between py-2 flex-col md:flex-row">
                        <div className="flex content-center py-2 text-gray-900 ">
                            <BiTime className="text-gray-900" size={24} /> <span className="px-2">{formateDate(article.created_at, 'LLL')}</span>
                            <FaRegEye className="text-gray-900 ml-4" size={24} /> <span className="px-2">{article.view ? article.view : '0'}</span>
                        </div>
                        <div className="flex content-center gap-2 ">
                            <Link passHref href={`https://www.facebook.com/sharer/sharer.php?u=${env.appUrl}/article/${article.id}`}>
                                <a target="_blank" rel="noreferrer">
                                    <span className="p-3 color text-white rounded-full inline-block cursor-pointer">
                                        <FaFacebookF />
                                        <style jsx>{`
                            .color{
                                background: #3b5998;
                            }
                            `}</style>
                                    </span>
                                </a>
                            </Link>
                            <Link passHref href={`https://www.facebook.com/sharer/sharer.php?u=${env.appUrl}/article/${article.id}`}>
                                <a target="_blank" rel="noreferrer">
                                    <span className="p-3 color text-white rounded-full inline-block cursor-pointer">
                                        <FaTwitter />
                                        <style jsx>{`
                            .color{
                                background: #26c4f1;
                            }
                            `}</style>
                                    </span>
                                </a>
                            </Link>
                            <Link passHref href={`https://t.me/share/url?url=${env.appUrl}article/${article.id}`}>
                                <a target="_blank" rel="noreferrer">
                                    <span className="p-3 color text-white rounded-full inline-block cursor-pointer">
                                        <FaTelegramPlane />
                                        <style jsx>{`
                            .color{
                                background: #0088cc;
                            }
                            `}</style>
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <article className="text-base" id="article">
                        <div dangerouslySetInnerHTML={{ __html: article.body_long }} />
                    </article>
                    {
                        ads3.map((i, key) => {
                            return <div key={key} className="w-full mb-2">
                                <Link className="w-full block" href={i.ads_content}>
                                    <Image placeholder="blur" blurDataURL={env.mediaURL + i.ads_image} className="cursor-pointer w-full" src={env.mediaURL + i.ads_image} width={728} height={90} alt="ads" layout="responsive" alt="Right ads" />
                                </Link>
                            </div>
                        })
                    }
                    <div className="block">
                        <div id="fb-root"></div>
                        <div className="fb-comments" data-href={`${env.appUrl}/${router.pathname}/`} data-width="" data-numposts="5"></div>
                        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0&appId=845108642600466&autoLogAppEvents=1" nonce="hmEZybVi"></Script>
                    </div>
                </conten>
                <Aside teayball={teayball} zone2={ads} />
            </div>
        </div>
    </>
}

export default Article;