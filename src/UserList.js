import React, { memo } from 'react'

function UserList(props){
    console.log('re-render UserList')
    
    return (
        <ul>
            {props.users.map((user,i) => <li key={i}>{user}</li>)}
        </ul>
    );
}

// export default UserList;
export default memo(UserList);