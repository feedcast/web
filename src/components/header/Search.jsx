import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search'

import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        'foo', 'bar'
      ]
    }
  }

  search(data) {
    //TODO implement that when api is done
    console.log(`search ${data}`);
  }

  render() {
    return (
      <div className='search'>
        <AutoComplete
          className='search__input'
          hintText='Busque os feeds'
          dataSource={this.state.data}
          filter={AutoComplete.caseInsensitiveFilter}
          textFieldStyle={{ color: 'foo' }}
          onNewRequest={ this.search }
          maxSearchResult={ 5 }
        />
        <SearchIcon
          className='search__icon'
          color='white'
        />
      </div>
    );
  }
}

export default Search;
