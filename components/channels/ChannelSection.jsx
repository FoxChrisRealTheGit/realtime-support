import React from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

export default class ChannelSection extends React.Component {
    render() {
      
        return (
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Channels</strong>
                </div>
                <div className ="panel-body channels">
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}