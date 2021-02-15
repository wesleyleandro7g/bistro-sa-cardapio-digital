import React from 'react'
import Link from 'next/link'

import styles from '../../styles/MenuMobileComponent.module.css'

const MenuMobile = ({ idPage, title, preview }) => {
    return(
        <Link href='/categoria/[id]' as={`/categoria/${idPage}`}>
            <div className={styles.container}>
                <img src={preview} className={styles.image} />
                <div className={styles.covered}>
                    <h4 className={styles.title}> {title} </h4>
                </div>
            </div>
        </Link>
    )
}

export default MenuMobile