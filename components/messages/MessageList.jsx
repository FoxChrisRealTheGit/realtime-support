import React from 'react';
import Message from './Message.jsx';
export default class MessageList extends React.Component{
    render(){
        const MESSAGES = this.props.messages.map( x =>{
            return(
                <Message key={x.id} message={x} />
            )
        })
        return(
            <ul>
                {MESSAGES}
            </ul>
        )
    }
}