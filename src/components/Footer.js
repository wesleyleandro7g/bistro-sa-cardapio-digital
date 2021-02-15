import React from 'react'
import { RiHeart2Fill } from 'react-icons/ri'

import styles from '../../styles/Footer.module.css'

const Footer = () => {
    const time = new Date()

    return(
        <footer className={styles.container}>
            <div className={styles.info}>
                <h3>Caetité/Ba</h3>
                <h3>-</h3>
                <h3>Tel.: (077) 9 8132-6164</h3>
            </div>
            
            <h6 className={styles.develop}>Feito com {<RiHeart2Fill color="#ff4d4d"/>} pela <a href="https://www.instagram.com/desencoder/" target="_blank" rel="noopener noreferrer"><span className={styles.desencoder}>DesenCoder</span></a> </h6>
            <h6 className={styles.copy}>&#169; {time.getFullYear()} Todos os direitos reservados</h6>
        </footer>
    )
}

export default Footer