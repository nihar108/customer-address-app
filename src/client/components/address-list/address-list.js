import React from 'react';
import './address-list.scss';
import AddressItem from './address-item';
import {connect} from 'react-redux';
import Loader from '../loader';

function AddressList(props) {
  const {customers, addresses, dispatch} = props;
  
  const customerAddress = addresses.items[customers.selectedCustomer] || {};
  const currAddresses = customerAddress.addresses;

  return (
    <div className="address-list">
      <div className="title">
        <i className="material-icons md-18">place</i>
        {
          !customers.selectedCustomer
            ? <h2>Select a customer to view addresses</h2>
            : (
              customerAddress.isFetching
                ? <h2>Loading...</h2>
                : <h2>{(currAddresses || []).length ? `${currAddresses.length} addresses found` : `No addresses found`}</h2>
            )
        }
      </div>
      <ul className="addresses">
        {
          !customerAddress.isFetching
            ? (currAddresses || []).map(address => (
              <AddressItem {...address} key={address._id} />
            ))
            : (
              <div className="loading-container">
                <Loader />
              </div>
            )
        }
      </ul>
    </div>
  )
}

export default connect(({ customers, addresses }) => ({ customers, addresses }))(AddressList);