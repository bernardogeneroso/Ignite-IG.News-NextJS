import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SubscribeButton({ priceId }: SubscribeButtonProps): JSX.Element {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}

export default SubscribeButton
