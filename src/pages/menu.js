import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HandleMenu from '../components/Menu'
import MenuMobile from '../components/MenuMobile'

import { data } from './api'

import styles from '../../styles/Home.module.css'

export default function Menu() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Head>
          <title>Bistrô Santo Antônio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className={styles.main}>
          {data.map(item => (
            <HandleMenu key={item.id} idPage={item.id} data={item.data} title={item.title} />
          ))}
        </main>

        <main className={styles.mainMobile}>
          {data.map(item => (
            <MenuMobile key={item.id} idPage={item.id} title={item.title} preview={item.data[0].img} />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  )
}
