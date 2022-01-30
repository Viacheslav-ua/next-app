import Link from "next/link";
import style from '../styles/A.module.css'
export default function ({href, text}) {
  return (
    <Link href={href}>
      <a className={style.link}>{text}</a>
    </Link>
  )
}