import React, { useState } from 'react';
import './customer-list.scss';
import ListItem from './list-item';

function CustomerList(props) {
  const {customers, handleSelection} = props;
  let [selected, setSelected] = useState('');

  let handleClick = (_id) => {
    setSelected(_id);
    handleSelection(_id);
  };

  return (
    <ul className="customer-list">
      {
        customers.map(customer => (
          <ListItem 
            customer={customer} key={customer._id}
            onClick={handleClick} isSelected={customer._id === selected}
          />
        ))
      }
    </ul>
  )
}

export default CustomerList;