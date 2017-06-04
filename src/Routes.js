import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Channel from './pages/channel';

const Paths = {
  home: "/",
  channel: "/channel/:uuid",
}

const RouteTo = (pathName, params) => {
  let path = Paths[pathName];
  if (!path) {
    throw new Error("Route path not found: " + pathName);
  }

  let placeHolders = path.match(/(:\w+)/g);
  if (placeHolders && params) {
    path = placeHolders.reduce((route, placeHolder) => {
      let param = placeHolder.slice(1);
      return route.replace(placeHolder, params[param])
    }, path);
  }

  return `${path}`;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path={ Paths.home } component={Home} />
        <Route path={ Paths.channel } component={Channel} />
      </div>
    </BrowserRouter>
  );
};

export { Routes, RouteTo, Paths };
