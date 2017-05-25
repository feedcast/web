import React, { Component } from 'react';

import ChannelGrid from '../../components/grids/ChannelsGrid';
import Page from '../Page';

class Home extends Component {

  render() {
    return (
      <Page>
        <div className="home">
          <ChannelGrid />
        </div>
      </Page>
    );
  }
}

export default Home;
