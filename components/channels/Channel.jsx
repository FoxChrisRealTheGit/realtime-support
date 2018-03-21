import React from 'react';

export default class Channel extends React.Component {

    onClick(e) {
        e.preventDefault();
        this.props.setChannel(this.props.channel)
    }

    render() {
        const active = this.props.channel === this.props.activeChannel? "active": "";
        return (
            <li className={active}>
                <a onClick={this.onClick.bind(this)}>
                    {this.props.channel.name}
                </a>
            </li>
        )
    }
}