import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UsersSection from './users/UsersSection.jsx';
import MessagesSection from './messages/MessagesSection.jsx';
import Socket from '../socket';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: '',
            connected: false,
        }
    }
    componentDidMount() {
       let socket = this.socket = new Socket();
        socket.on("connect", this.onConnect.bind(this))
        socket.on("disconnect", this.onDisconnect.bind(this))
        socket.on("channel add", this.onAddChannel.bind(this))
        socket.on("user add", this.onAddUser.bind(this))
        socket.on("user edit", this.onEditUser.bind(this))
        socket.on("user remove", this.onRemoveUser.bind(this))
        socket.on("message add", this.onMessageAdd.bind(this))

    }
    onMessageAdd(message) {
        let tempMessages = this.state.messages
        tempmessages.push(message)
        this.setState({ messages: tempMessages })
    }
    onRemoveUser(removeUser) {
        let tempusers = this.state.users.filter(x => {
            return x.id !== removeUser.id
        })
        this.setState({ users: tempusers })
    }
    onAddUser(user) {
        let tempusers = this.state.users
        tempusers.push(user)
        this.setState({ users: tempusers })
    }
    onEditUser(editUser) {
        let tempusers = this.state.users.map(x => {
            if (editUser.id === x.id) {
                return editUser;
            } else {
                return x
            }
            this.setState({ users: tempusers })
        })
        this.setState({ users: tempusers })
    }
    onConnect() {
        this.setState({ connected: true })
        this.socket.emit("channel subscribe")
        this.socket.emit("user subscribe")
    }
    onDisconnect() {
        this.setState({ connected: false })
    }

    onAddChannel(channel) {
        let tempchans = this.state.channels;
        tempchans.push(channel);
        this.setState({ channels: tempchans })
    }
    addChannel(name) {
        this.socket.emit("channel add", { name })
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel: activeChannel });
        this.socket.emit("message unsubscribe")
        this.setState({ messages: [] })
        this.socket.emit("message subscribe",
            { channelId: activeChannel.id })
    }
    setUserName(name) {
        this.socket.emit("user edit", { name })
    }

    addMessage(body) {
        this.socket.emit("message add",
            { channelId: this.state.activeChannel.id, body })
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
                        setUserName={this.setUserName.bind(this)} />

                </div>
                <MessagesSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)} />
            </div>

        )
    }
}