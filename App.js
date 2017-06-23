import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers/index';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCcFDaGxLwHw1nYZeRLczkV0OJnLNhaZHM',
      authDomain: 'reactnative-95139.firebaseapp.com',
      databaseURL: 'https://reactnative-95139.firebaseio.com',
      storageBucket: 'reactnative-95139.appspot.com',
      messagingSenderId: '321385687390',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ marginTop: 50 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
