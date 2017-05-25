import React, { Component } from 'react';
import HeaderBar from 'material-ui/AppBar';
import Logo from './Logo';
import Search from './Search';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <HeaderBar title={ <Logo /> } className="header">
        <Search onSearchRequest={ this.props.onSearch }/>
      </HeaderBar>
    );
  }
}

export default Header;
