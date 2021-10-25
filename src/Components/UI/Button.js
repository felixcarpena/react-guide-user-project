import styles from './Button.module.css'

const Button = ({ children, onClick, type }) => {
    return (
        <button type={type || 'button'} className={styles.button} onClick={onClick}>{children}</button>
    )
}

export default Button