'use strict';

const React = require('react-native');
const {
  AppRegistry,
} = React;

// const MainApp = require('./Examples/NavigationBasicExample');
// const MainApp = require('./Examples/NavigationContainerExample');
// const MainApp = require('./Examples/NavigationAnimatedExample');
const MainApp = require('./Examples/NavigationJankyExample');

AppRegistry.registerComponent('main', () => MainApp);
