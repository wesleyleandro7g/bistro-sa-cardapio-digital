import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bistrô Santo Antônio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>About</h1>
      </main>

      <Footer />
    </div>
  )
}
