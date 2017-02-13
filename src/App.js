import React, { Component } from 'react';
import './App.css';
import Alarm from './Alarm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Alarm />
      </MuiThemeProvider>
    );
  }
}

export default App;
