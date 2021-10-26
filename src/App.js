import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers((previousUsers) => [...previousUsers, user])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/> 
      <UserList users={users} />
    </div>
  );
}

export default App;
