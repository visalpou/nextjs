
import env from './../env'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react';


const Navbar = (props) => {
    const { data, ads } = props.categories
    const router = useRouter();
    const [menu,setMenu] = useState(false)
    return <>
        {/* Mobile */}
        <header className="bg-gray-700 md:hidden flex items-center px-4 justify-between w-screen fixed z-20 top-0 left-0">
            <button className="focus:bg-gray-400 p-3 rounded-md" onClick={()=>setMenu(!menu)}>
                {
                    menu ? <IoClose className="text-white" size={30} /> : < HiMenu className="text-white" size={30} />
                }
            </button>
            <Link passHref href="/" className="cursor-pointer">
                <Image src="/logo.png" width={70} height={70} alt="logo" />
            </Link>
            <span className="text-xl font-bold text-white">
                ទាយបាល់
            </span>
            {
                menu ? <div className="fixed z-10 t-75px left-0">
                    <ul className="flex flex-col bg-gray-600 w-screen">
                        <li className={`text-white cursor-pointer px-5 py-3 hover:bg-gray-500 transition-all font-medium ${router.pathname == "/" ? "bg-gray-500" : ""} `}>
                            <Link passHref href='/' replace>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g><path fill="currentColor" d="M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z" ></path><path fill="currentColor" d="M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z" ></path></g></svg>
                            </Link>
                        </li>
                        {
                            data && data.map((idx, key) => {
                                return <Link key={key} passHref href={`/category/${idx.slug}`} ><li  className={`text-white px-5 py-3 hover:bg-gray-500 transition-all ${router.query.category == idx.slug ? "bg-gray-500" : ""}`}>
                                    {idx.name}
                                </li>
                                </Link>
                            })
                        }
                    </ul>
                </div> : ''
            }
            
        </header>
        {/* Desktop */}
        <header className="bg-gray-700 hidden md:block">
            <div className="container mx-auto flex justify-between pt-3 max-w-6xl">
                <div>
                    <Image placeholder="blur" blurDataURL="/logo.png" src="/logo.png" width={100} height={100} alt="logo" />
                </div>
                <Link href={ads.ads_content} passHref>
                    <div className="overflow-hidden">
                        <Image placeholder="blur" blurDataURL={env.mediaURL + ads.ads_image} src={env.mediaURL + ads.ads_image} width={728} height={90} alt="ads" />
                    </div>
                </Link>
            </div>
            <nav className="bg-gray-800" id="navbar">
                <ul className="flex container mx-auto max-w-6xl">
                    <li className={`text-white px-5 py-3 hover:bg-gray-500 transition-all font-medium ${router.pathname == "/" ? "bg-gray-500" : ""} `}>
                        <Link href='/'>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g><path fill="currentColor" d="M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z" ></path><path fill="currentColor" d="M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z" ></path></g></svg>
                        </Link>
                    </li>
                    {
                        data && data.map((idx, key) => {
                            return <Link key={key} passHref href={`/category/${idx.slug}`}>
                                <li className={`cursor-pointer text-white px-5 py-3 hover:bg-gray-500 transition-all ${router.query.category == idx.slug ? "bg-gray-500" : ""}`}>
                                    {idx.name}
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </nav>
        </header>
    </>
}


export default Navbar;