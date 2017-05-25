import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';

import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
