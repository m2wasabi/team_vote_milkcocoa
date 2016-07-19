/**
 * Created by m2wasabi on 2016/07/19.
 */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// components
import masterApp from './reduces/masterApp';
import App from './components/master/App';
let store = createStore(masterApp);

let View = App;

/*
const View = React.createClass({
  render() {
    return (
      <div>
        ごもくそば！
      </div>
  )
  }
});
*/

render(
  <Provider store={store}>
    <View/>
  </Provider>,
  document.getElementById('content')
);

