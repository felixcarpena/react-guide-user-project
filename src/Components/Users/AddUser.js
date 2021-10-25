import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'

const AddUser = ({ onUserAdded }) => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim.length === 0 || enteredUserAge.trim.length === 0 || parseInt(enteredUserAge) < 1){
            console.log("do nothing")
            //do nothing
            return
        }
        onUserAdded({ name: enteredUserName, age: enteredUserAge })
        setEnteredUserName('')
        setEnteredUserAge('')
    }

    return (
        <Card cssClass={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User name</label>
                <input name="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (year)</label>
                <input name="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser