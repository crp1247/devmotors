"use client"

import Link  from "next/link";
import styles from './error.module.scss'

export default function Error(){
    return(
        <div className={styles.error}>
            <h1> Ops essa pagina nao exieste!</h1>
            <Link className={styles.a} href="/">
                voltar para a home
            </Link>
        </div>
    )
}