import React from 'react';
import PropTypes from 'prop-types';

import Panel from './features/Panel'

// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Panel />
      </div>
    )
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);