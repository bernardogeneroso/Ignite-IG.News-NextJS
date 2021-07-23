import { useSession, signIn } from 'next-auth/client'

import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SubscribeButton({ priceId }: SubscribeButtonProps): JSX.Element {
  const [session] = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}

export default SubscribeButton
