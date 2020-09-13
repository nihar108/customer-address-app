import React, {useEffect} from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import Sidebar from './components/sidebar';
import AddressList from './components/address-list';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-body">
          <div className="left-section">
            <Sidebar />
          </div>
          <div className="right-section">
            <AddressList />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App;