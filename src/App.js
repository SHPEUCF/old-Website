import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Router from './config/Router';


class App extends Component {

  componentWillMount() {
    // Initialize firebase
    const config = {
      apiKey: "AIzaSyCeX5lUZUmQxXsWNO8gNXVHqfJs-kQmSaY",
      authDomain: "shpe-ucf.firebaseapp.com",
      databaseURL: "https://shpe-ucf.firebaseio.com",
      projectId: "shpe-ucf",
      storageBucket: "shpe-ucf.appspot.com",
      messagingSenderId: "974032317047"
    };
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loggedIn = true;
        Actions.main();
      } else {
        this.props.loggedIn = false;
        Actions.login();
      }
    });
  }

  render() {
    return <Router />;
  }
}

const mapStateToProps = ({ auth }) => {
  const { loggedIn } = auth;
  return { loggedIn };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
