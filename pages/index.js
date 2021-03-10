import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DID I DO IT?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Ha, imagine not having a website
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
