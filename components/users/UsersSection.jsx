import React from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

export default class UsersSection extends React.Component{
    render(){
        return(
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Users</strong>
                </div>
                <div className ="panel-body users">
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}