import React from 'react';
import './address-list.scss';
import AddressItem from './address-item';

function AddressList(props) {
  const address = {
    address: 'D3, Dwarka Residency',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    pin: '382481',
    type: 'Office'
  };

  return (
    <div className="address-list">
      <div className="title">
        <i className="material-icons md-18">place</i>
        <h2>Addresses for Harry Potter</h2>
      </div>
      <ul className="addresses">
        <AddressItem {...address}/>
      </ul>
    </div>
  )
}

export default AddressList;