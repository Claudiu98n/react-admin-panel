import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users, deleteUser } = props;
    return (
        users.length
        ?   <div className="row my-2">
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={ user.salary } 
                        images={ user.image }
                        deleteUser= { deleteUser }
                        key={ index }
                    />
                })}
            </div>
        
        :   <div>
                <p className="h1 text-primary my-5 text-center">Nu exista utilizatori</p>
            </div>

    );
}

export default UserList;

