import React, { Component } from 'react';

import feedcast from '../../services/feedcast';

import ChannelGrid from '../../components/grids/ChannelsGrid';
import Page from '../Page';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { channels: [] }
  }

  componentDidMount() {
    feedcast.fetchChannels()
      .then(channels => this.setState({ channels: channels }))
  }

  render() {
    return (
      <Page>
        <div className="home">
          <ChannelGrid  channels={ this.state.channels }/>
        </div>
      </Page>
    );
  }
}

export default Home;
