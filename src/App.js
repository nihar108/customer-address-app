import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar';
import AddressList from './components/address-list';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <div className="left-section">
            <Sidebar />
          </div>
          <div className="right-section">
            <AddressList/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;