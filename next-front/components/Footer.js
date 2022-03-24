import { FaFacebookF, FaFacebookMessenger, FaTelegram } from 'react-icons/fa'
import { AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
    return <footer className="bg-gray-800">
        <div className="container mx-auto max-w-6xl text-blue-50 py-4">
            <div className="flex justify-between flex-col md:flex-row gap-2 items-center">
                <div className="text-center">
                    &copy; រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ TEAYBALL ឆ្នាំ​២០២១
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Link passHref href={'#'}>
                        <p className="bg-blue-600 p-4 rounded-md cursor-pointer hover:opacity-90">
                            <FaTelegram />
                        </p>
                    </Link>
                    <Link passHref href={'https://www.messenger.com/t/104876621883330/'}>
                        <p className="bg-blue-500 p-4 rounded-md cursor-pointer hover:opacity-90">
                            <FaFacebookMessenger />
                        </p>
                    </Link>
                    <Link passHref href={'https://www.facebook.com/TeayBall'}>
                        <p className="bg-blue-400 p-4 rounded-md cursor-pointer hover:opacity-90">
                            <FaFacebookF />
                        </p>
                    </Link>
                    <Link passHref href={'#'}>
                        <p className="bg-red-600 p-4 rounded-md cursor-pointer hover:opacity-90">
                            <AiFillYoutube />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;