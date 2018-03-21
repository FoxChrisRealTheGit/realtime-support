import React from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from "./MessageForm.jsx";

export default class MessagesSection extends React.Component{
    render(){
        return(
            <div className="messages-container panel panel-default">
                <div className="panel-heading">
                    <strong>{this.props.activeChannel.name}</strong>
                </div>
                <div className ="panel-body messages">
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}