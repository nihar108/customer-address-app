import React, {useEffect, useState} from 'react';
import CustomerList from '../customer-list';
import './sidebar.scss';
import { connect } from 'react-redux';
import * as CustomerActions from '../../store/actions/customers';
import * as AddressActions from '../../store/actions/addresses';
import Loader from '../loader';

function Sidebar(props) {
  let filteredList;
  let [search, setSearch] = useState('');
  const {customers, dispatch} = props;

  useEffect(() => {
    dispatch(CustomerActions.getCustomers());
  }, []);

  let handleChange = (event) => {
    setSearch(event.target.value);
  }

  let handleSelection = (_id) => {
    dispatch(CustomerActions.selectCustomer(_id));
    dispatch(AddressActions.getAddresses(_id));
  }

  filteredList = customers.items.filter(customer => {
    return customer.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className="sidebar">
      <div className="search-section">
        <div className="search-box">
          <i className="material-icons md-18">search</i>
          <input 
            type="text" className="search-field" placeholder="Search customers by name" 
            onChange={handleChange}
          />
        </div>
      </div>
      {
        !customers.isFetching
          ? <CustomerList customers={filteredList} handleSelection={handleSelection}></CustomerList>
          : (
            <div className="loading-container">
              <Loader/>
            </div>
          )
      }
    </div>
  )
}

export default connect(({customers}) => ({customers}))(Sidebar);