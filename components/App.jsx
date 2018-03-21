import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
    }
    addChannel(name) {
        let tempchans = this.state.channels
        tempchans.push({ id: tempchans.length, name })
        this.setState({ channels: tempchans })
        // TODO: Send to server
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel })
        // TODO: Get Channels Messages
    }
    render() {
        return (
            <div className="app">
                <div className="nav">
                  
                        <ChannelSection
                            {...this.state}
                            addChannel={this.addChannel.bind(this)}
                            setChannel={this.setChannel.bind(this)}
                        />
                </div>
            </div>

        )
    }
}