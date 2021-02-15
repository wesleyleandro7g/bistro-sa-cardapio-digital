import React from 'react'

import styles from '../../styles/MenuComponent.module.css'

const Menu = ({ data, title }) => {
    return(
        <div className={styles.content}>
            <h1 className={styles.title}> {title} </h1>
            <div className={styles.contentDishes}>
                {data.map(item => (
                    <div key={item.id} className={styles.imageContent}>
                        <img src={item.img} alt={item.title} className={styles.image} />
                        <div className={styles.covered}>
                            <h6 className={styles.dish}> {item.title} </h6>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default Menu