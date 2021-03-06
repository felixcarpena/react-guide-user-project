import Card from '../UI/Card'
import styles from './UserList.module.css'

const UserList = ({ users }) => {
    return (
        <>
            {users.length > 0 &&
                <Card cssClass={styles.users}>
                    <ul>
                        {users.map(user => <li>{user.name} ({user.age} years old)</li>)}
                    </ul>
                </Card>
            }
        </>
    )
}

export default UserList