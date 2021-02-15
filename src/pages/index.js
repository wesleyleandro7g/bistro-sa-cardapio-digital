import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'

import styles from '../../styles/Splash.module.css'

const Splash = () => {
  const router = useRouter()

  useEffect(() => handleHome(), [])

  function handleHome (){
    setTimeout(() => {
      router.push('/menu')
    }, 2000)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Bistrô Santo Antônio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/img/splah-screen.png" alt="tela inicial" className={styles.image} />
    </div>
  )
}

export default Splash