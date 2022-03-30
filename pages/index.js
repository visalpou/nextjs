import Link from "next/link"
import LastPara from "../component/LastPara"
import Slide from "../component/Slide"
import styles from '../styles/Home.module.css'
import Detail from '/component/Detail.js'


export default function Social() {
  return (
    <div className="px-5">
        <Slide/>
        <Detail/>
        <LastPara/>
    </div>
  )
}
