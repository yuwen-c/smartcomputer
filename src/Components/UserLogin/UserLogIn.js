import React from 'react';

const UserLogIn = ({user}) => {
    return (
        <article className="mw8 center ph3 ph5-ns tc br2 mb0">
            <p className="fw3 f3 mt0 mb1">
                {user.name}, your current entries is...
            </p>
            <p className="fw5 f3 mt0 ">
                #{user.entries}
            </p>
        </article>

    )
}

export default UserLogIn;