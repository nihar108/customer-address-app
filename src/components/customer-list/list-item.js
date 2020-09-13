import React from 'react';
import './list-item.scss';

function ListItem(props) {
  const {
    id,
    name,
    age,
    gender
  } = props.customer;

  const initials = name.split(' ').reduce((acc, cv, index) => {
    return index < 2 ? acc + cv[0] : acc;
  }, '');

  return (
    <div className="list-item">
      <div className="avatar">{initials}</div>
      <div className="details">
        <div className="left">
          <div className="name">{name}</div>
          <div className="other-details">
            <div className="age">{age}</div>
            <div className="gender">{gender}</div>
          </div>
        </div>
        <div className="right">
          <p className="id">{id}</p>
        </div>
      </div>
    </div>
  )
}

export default ListItem;