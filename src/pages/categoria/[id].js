import React from 'react'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'

import { data } from '../api'

import s from '../../../styles/Category.module.css'

const Category = ({ category = {} }) => {
    return(
        <div className={s.container}>
            <header className={s.header}>
                <img className={s.image} src={category.data[0].img} />
                <div className={s.covered}>
                    <Link href='/menu'>
                        <MdArrowBack className={s.icon} />
                    </Link>
                    <h2> {category.title} </h2>
                </div>
            </header>
            <main>
                {category.data.map(item => (
                    <div className={s.content}>
                        <div className={s.containImage}>
                            <img src={item.img} />
                        </div>
                        <div className={s.info}>
                            <div>
                                <h3> {item.title} </h3>
                                <h6> {item.description} </h6>
                            </div>                            
                            <div className={s.price}>
                                <h4> {item.price && Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)} </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const category = data[context.params.id]

    return {
        props: { category },
    }
}

export async function getStaticPaths() {
    const paths = data.map(category => {
        return { params: { id: String(category.id)} }
    })

    return {
        paths,
        fallback: false
    };
}

export default Category