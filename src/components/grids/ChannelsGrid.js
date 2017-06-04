import React from 'react';
import { Link } from 'react-router-dom'

import { RouteTo } from '../../Routes';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';

import './ChannelsGrid.scss';


const GridItem = (channel) => (
  <Link to={ RouteTo('channel', { uuid: channel.uuid }) } >
    <GridTile
      className="grid__item"
      key={channel.uuid}
      title={channel.title}
      subtitle={ channel.description}
      actionIcon={<IconButton><PlayIcon color="white" /></IconButton>} >
        <img src={channel.image_url} />
    </GridTile>
  </Link>
)

const ChannelsGrid = ({...props}) => (
  <div className="grid__container">
    <GridList className="grid__list" cols={ 3 } cellHeight={ 300 } >
    { props.channels.map(GridItem) }
    </GridList>
  </div>
);

export default ChannelsGrid;
