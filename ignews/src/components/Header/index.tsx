import { useRouter } from 'next/router'

import SignInButton from './SignInButton'
import ActiveLink from './ActiveLink'

import styles from './styles.module.scss'

function Header(): JSX.Element {
  const router = useRouter()

  function handleRedirectToHome() {
    router.push('/')
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img
          src="/images/logo.svg"
          alt="ig.news"
          onClick={handleRedirectToHome}
        />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}

export default Header
