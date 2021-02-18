import React from 'react'
import { RiInstagramLine, RiPhoneFill, RiTimeFill } from 'react-icons/ri'
// import Link from 'next/link'

import s from '../../styles/Header.module.css'

const Hearder = () => {
    return(
        <header className={s.header}>
            <div className={s.contentLogo}>
                <img
                    src="/img/bistro-santo-antonio-logo.png"
                    alt="Logo Bistrô Santo Antonio"
                    className={s.bistroLogo}
                />
            </div>
            <div className={s.contentMenu}>
                <h1 className={s.title}>Cardápio Online</h1>
                <a
                    href="https://www.instagram.com/bistrostoantonio/"
                    target="_blank" rel="noopener noreferrer">
                        <RiInstagramLine className={s.icons} />
                </a>
            </div>
            <div className={s.headerMobile}>
                <a href="https://www.instagram.com/bistrostoantonio/" target="_blank" rel="noopener noreferrer">
                    <div className={s.logoMobile}>
                        <h1 className={s.titleLarge}>Bistrô</h1>
                        <h1 className={s.titleSmall}>Santo Antônio</h1>
                    </div>
                </a>
                <div className={s.contentInfo}>
                    <RiTimeFill className={s.icon} />
                    <h6 className={s.info}>11h 30min as 14h 00min - 18h 30min as 23h 00min </h6>
                </div>
                <div className={s.contentInfo}>
                    <RiPhoneFill className={s.icon} />
                    <h6 className={s.info}>(77) 9 8132-6164</h6>
                </div>
            </div>
        </header>
    )
}

export default Hearder