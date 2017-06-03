import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';

import './ChannelsGrid.scss';


const OnGrudTileClick = (evt, channel) => {
  alert(channel.title)
}

const GridItem = (channel) => (
  <GridTile
    className="grid__item"
    key={channel.uuid}
    title={channel.title}
    subtitle={ channel.description}
    actionIcon={<IconButton><PlayIcon color="white" /></IconButton>}
    onClick={ e => OnGrudTileClick(e, channel) } >
      <img src={channel.image_url} />
  </GridTile>
)

const ChannelsGrid = ({...props}) => (
  <div className="grid__container">
    <GridList className="grid__list" cols={ 3 } cellHeight={ 300 } >
    { props.channels.map(GridItem) }
    </GridList>
  </div>
);

export default ChannelsGrid;
