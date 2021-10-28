import Button from "./Button"
import Card from "./Card"
import styles from "./ErrorModal.module.css"
import reactDom from "react-dom"

const Backdrop = ({ onClickButton }) => (
    <div className={styles.backdrop} onClick={onClickButton} />
)

const ModalOverlay = ({ title, message, onClickButton }) => (
    <Card cssClass={styles.modal}>
        <header className={styles.header}>
            <h2>{title}</h2>
        </header>
        <div className={styles.content}>
            <p>{message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={onClickButton}>Okay</Button>
        </footer>
    </Card>
)

const ErrorModal = ({ message, onClickButton, title }) => {
    return (
        <>
            {reactDom.createPortal(<Backdrop onClickButton={onClickButton} />, document.getElementById('backdrop-root'))}
            {reactDom.createPortal(<ModalOverlay title={title} message={message} onClickButton={onClickButton} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal