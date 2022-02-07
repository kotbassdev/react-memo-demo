import React,{useState} from 'react'
import Counter from './Counter';
import UserList from './UserList';

export default function App() {
  const [users,setUsers] = useState(['User 1','User 2','User 3','User 4','User 5'])
  const [count,setCount] = useState(0);

  function handleCountClick(){
    setCount(count+1)
  }

  return (
    <React.Fragment>
      <UserList users={users}/>
      <Counter count={count} hdlClick={handleCountClick}/>
    </React.Fragment>
  );
}
