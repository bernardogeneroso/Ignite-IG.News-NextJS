import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic'

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {},
    //revalidate: 60 * 60 * 24, // 24 hours or 1 day
  }
}
