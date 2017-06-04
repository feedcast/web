import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../components/header/';
import colors from 'colors';

import './Page.scss';

const theme = getMuiTheme({
  appBar: {
    color: colors,
  }
});

class Page extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="app">
          <Header title='Feedcast' zDepth={5} />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Page;
