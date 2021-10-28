import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = ({ onAddUser }) => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [formError, setFormError] = useState(null)

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const formError = enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0;
        if (formError) {
            setFormError({ title: 'An error ocurred', message: 'Name and age cant be empty' })
            return
        }
        if (parseInt(enteredUserAge) < 1) {
            setFormError({ title: 'An error ocurred', message: 'Age must be greater than 0' })
            return
        }
        onAddUser({ id: Math.random().toString(), name: enteredUserName, age: enteredUserAge })
        setEnteredUserName('')
        setEnteredUserAge('')
    }
    const handleModalClickButton = () => {
        setFormError(false)
    }

    return (
        <>
            {formError && <ErrorModal title={formError.title} message={formError.message} onClickButton={handleModalClickButton} />}
            <Card cssClass={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User name</label>
                    <input name="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age (year)</label>
                    <input name="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser