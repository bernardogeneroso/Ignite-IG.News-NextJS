import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

function SignInButton(): JSX.Element {
  const [session] = useSession()

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
      title="Sign out"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
      title="Sign in"
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}

export default SignInButton
