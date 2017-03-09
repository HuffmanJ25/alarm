import React, { Component } from 'react';
import Alarm from './Alarm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import './css/alarm.css';

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
