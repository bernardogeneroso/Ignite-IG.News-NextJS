import React from 'react'
import Head from 'next/head'

import styles from '../styles/home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <h1 className={styles.title}>Hello World</h1>
    </>
  )
}

export default Home
