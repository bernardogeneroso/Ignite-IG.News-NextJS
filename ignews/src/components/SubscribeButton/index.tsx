import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import api from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SubscribeButton({ priceId }: SubscribeButtonProps): JSX.Element {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      {session?.activeSubscription ? 'Go to posts' : 'Subscribe now'}
    </button>
  )
}

export default SubscribeButton
