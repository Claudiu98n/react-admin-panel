import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, salary, images, id, deleteUser} = props;
    return (
        <div className="col-4 card align-items-center text-center my-4 p-5">
            <img className="card-image-top w-25" src={ images } alt="profile"></img>
            <div className="card-body">
                <h3 className="card-title">{ name }</h3>
                <p className="card-text">{ email }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
                <p className="card-text">{ salary } Lei</p>
                <button className="btn btn-secondary" onClick={(event) => deleteUser(event, id)}>Sterge Utilizatorul</button>
            </div>
        </div>
    );
}

export default UserItem;