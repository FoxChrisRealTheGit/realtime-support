import React from 'react';
import User from './User.jsx';

export default class UserList extends React.Component {
    render() {
        let USERS = this.props.users.map(x => {
            return (
                <User
                    key={x.id}
                    user={x}
                />
            )
        })
        return (
            <ul>
                {USERS}
            </ul>
        )
    }
}