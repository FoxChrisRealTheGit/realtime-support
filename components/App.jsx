import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UsersSection from './users/UsersSection.jsx';
import MessagesSection from './messages/MessagesSection.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel:'',
        }
    }
    addChannel(name) {
        let tempchans = this.state.channels
        tempchans.push({ id: tempchans.length, name })
        this.setState({ channels: tempchans })
        // TODO: Send to server
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel: activeChannel });
        // TODO: Get Channels Messages
    }
    setUserName(name){
        let tempusers = this.state.users;
        tempusers.push({id: tempusers.length, name});
        this.setState({users: tempusers}); 
        //TODO: Send to server
    }

    addMessage(body){
        let createdAt = new Date;
        let author = this.state.users.length>0? this.state.users[0].name: "anonymous";
        let tempmessages = this.state.messages;
        tempmessages.push({id: tempmessages.length, body, createdAt, author});
        this.setState({messages: tempmessages})
        // TODO: Send to server
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
                    <UsersSection 
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}/>

                </div>
                    <MessagesSection 
                        {...this.state}
                        addMessage={this.addMessage.bind(this)}/>
            </div>

        )
    }
}