import React from 'react';
// import fecha from 'fecha';

export default class Message extends React.Component {

    render() {
        // let createdAt = fecha.format(message.createdAt, "HH:mm:ss MM/DD/YY");
        let createdAt;
        return (
            <li className="message">
                <div className="author">
                    <strong>{this.props.message.author}</strong>
                    <i className="timestamp">{createdAt}</i>
                </div>
                <div className="body">{this.props.message.body}</div>
            </li>
        )
    }
}