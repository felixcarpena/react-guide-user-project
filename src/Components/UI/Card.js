import styles from './Card.module.css'

const Card = ({ cssClass, children }) => {
    return (
        <div className={`${styles.card} ${cssClass}`}>{children}</div>
    )
}

export default Card