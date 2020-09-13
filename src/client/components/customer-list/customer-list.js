import React from 'react';
import './customer-list.scss';
import ListItem from './list-item';

function CustomerList() {
  return (
    <div className="customer-list">
      <div className="search-section">
        <div className="search-box">
          <i className="material-icons md-18">search</i>
          <input type="text" className="search-field" placeholder="Search Customers"/>
        </div>
      </div>
      <div className="list">
        <ListItem customer={
          {
            id: 1,
            name: 'Harry Potter',
            age: 31,
            gender: 'Male'
          }
        }/>
      </div>
    </div>
  )
}

export default CustomerList;