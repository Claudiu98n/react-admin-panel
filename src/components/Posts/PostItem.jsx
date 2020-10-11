import React from 'react';

function PostItem(props) {
    const {title, body} = props;
    return (
        <div className="card my-3 p-5">
            <h3>{ title }</h3>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;