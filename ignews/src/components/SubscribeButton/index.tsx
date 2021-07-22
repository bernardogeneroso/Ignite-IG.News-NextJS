import styles from './styles.module.scss'

function SubscribeButton(): JSX.Element {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}

export default SubscribeButton
