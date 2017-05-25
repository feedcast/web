import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import './ChannelsGrid.scss';

const channels = [
  {
    img: 'http://i.imgur.com/h6uVWLG.png',
    title: 'Falhando no Amor',
    author: 'foo',
  },
  {
    img: 'https://media.giphy.com/media/VnIoecjQ3caw8/giphy.gif',
    title: 'Music',
    author: 'afoo',
  },
  {
    img: 'https://i1.sndcdn.com/avatars-000098499912-k7bbxx-large.jpg',
    title: 'Best Cast',
    author: 'bestcast',
  },
];

const GridItem = (channel) => (
  <GridTile
    className="grid__item"
    key={channel.img}
    title={channel.title}
    subtitle={<span>by <b>{channel.author}</b></span>}
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>} >
    <img src={channel.img} />
  </GridTile>
)

const ChannelsGrid = () => (
  <div className="grid__container">
    <GridList
      className="grid__list"
      cols={ 3 }
      cellHeight={ 300 }
    >
      { channels.map(GridItem) }
    </GridList>
  </div>
);

export default ChannelsGrid;
