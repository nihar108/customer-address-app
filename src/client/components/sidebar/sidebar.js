import React from 'react';
import CustomerList from '../customer-list';
import './sidebar.scss';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <CustomerList></CustomerList>
    </div>
  )
}

export default Sidebar;