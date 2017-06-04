import React, { Component } from 'react';

import feedcast from '../../services/feedcast';

import Page from '../Page';

class Channel extends Component {
  constructor(props) {
    super(props)

    this.state = { channel: [] }
  }

  componentDidMount() {
    feedcast.fetchChannelById(this.props.match.params.uuid)
      .then(channel => this.setState({ channel: channel }))
  }

  render() {
    return (
      <Page>
        <div className="home">
         <h1> { this.props.match.params.uuid } </h1>
        </div>
      </Page>
    );
  }
}

export default Channel;
