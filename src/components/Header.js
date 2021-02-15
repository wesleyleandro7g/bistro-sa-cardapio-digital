import React from 'react'
import { RiInstagramLine } from 'react-icons/ri'
// import Link from 'next/link'

import headerStyles from '../../styles/Header.module.css'

const Hearder = () => {
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.contentLogo}>
            <img
                src="/img/bistro-santo-antonio-logo.png"
                alt="Logo Bistrô Santo Antonio"
                className={headerStyles.bistroLogo} />
            </div>
            <div className={headerStyles.contentMenu}>
            {/* <Link href='/home'>
                <a className={headerStyles.item}>Home</a>              
            </Link>
            <Link href='/about'>
                <a className={headerStyles.item}>Sobre nós</a>
            </Link>            
            <Link href='/menu'>
                <a className={headerStyles.menu}>Cardápio</a>
            </Link> */}

                <h1 className={headerStyles.title}>Cardápio Online</h1>
                <a
                    href="https://www.instagram.com/bistrostoantonio/"
                    target="_blank" rel="noopener noreferrer">
                        <RiInstagramLine className={headerStyles.icons} />
                </a>
            </div>
        </header>
    )
}

export default Hearder