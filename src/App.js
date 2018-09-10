import React, { Component } from 'react';
import './App.css';

// REDUX
import { Provider } from "react-redux";
import store from "./store/index";

// Routing 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { __STYLES__ } from './helpers/Styles.js'
import { 
  setFocusedZone, 
  setWindowDimensions 
} from './actions/index.js'
import { connect } from "react-redux";
import { 
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  Slate, 
  Black, 
  White } from './helpers/Colors.js'
import PortfolioTechnologyPane from './components/PortfolioTechnologyPane.js'

const mapDispatchToProps = dispatch => {
  return {
    setWindowDimensions: dimensions => dispatch(setWindowDimensions(dimensions)),
    setFocusedZone: zoneid => dispatch(setFocusedZone(zoneid)),
  }
}

const mapStateToProps = state => {
  return { 
    focusedZone: state.focusedZone,
    dimensions: state.dimensions
  };
};

class ConnectedApp extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
    };

  }

  render() {
    return (
      <div style={styles.container}>
        
        <PortfolioTechnologyPane/>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
}

const ProvidedApp = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

const App = () => (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={ProvidedApp}/>
    </Provider>
  </Router>
)

export default App
