import Head from 'next/head'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo
              infelix una molestia, fellx rursus, cum is ipse anulus in
              praecordiis piscis inventus est?
            </p>
          </a>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo
              infelix una molestia, fellx rursus, cum is ipse anulus in
              praecordiis piscis inventus est?
            </p>
          </a>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo
              infelix una molestia, fellx rursus, cum is ipse anulus in
              praecordiis piscis inventus est?
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
