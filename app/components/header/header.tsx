import Link from "next/link"
import css from "./header.module.css"

export default function Header(){
    return(
        <div className={css.div}>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Contact</Link></li>
            <li><Link href="/">Footer</Link></li> 
            </ul>
        </div>
    )
}