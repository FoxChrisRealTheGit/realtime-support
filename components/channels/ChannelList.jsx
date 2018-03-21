import React from 'react'
import Channel from './Channel.jsx';

export default class ChannelList extends React.Component {

    render() {
        const CHAN = this.props.channels.map((x )=> {
            return (
                <Channel key ={x.id} channel={x} {...this.props}/>
            )
        })
        return (
            <ul>
                {CHAN}
            </ul>
        )
    }
}