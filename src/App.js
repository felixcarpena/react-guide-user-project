import { useState } from 'react';
import AddUser from './Components/Users/AddUser';

function App() {
  const [users, setUsers] = useState([])

  const onUserAdded = (user) => {
    setUsers((previousUsers) => [...previousUsers, user])
    console.log(users)
  }

  return (
    <div>
      <AddUser onUserAdded={onUserAdded}/> 
    </div>
  );
}

export default App;
