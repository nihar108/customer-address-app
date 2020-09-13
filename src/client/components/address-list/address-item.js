import React from 'react';
import './address-item.scss';
import {copyToClipboard} from '../../helpers';

function AddressItem(props) {
  const {
    address,
    city,
    state,
    pin,
    country,
    type
  } = props;

  function handleCopy() {
    const copiedAddress = `${address}\n${city}\n${state}\nPincode: ${pin}\n${country}`;
    console.log(copiedAddress);
    copyToClipboard(copiedAddress);
  }

  return (
    <li className="address-item">
      <div className="icon-container">
        {
          type === 'Home'
            ? <i className="material-icons md-18">home</i>
            : <i className="material-icons md-18">business</i>
        }
      </div>
      <div className="contents">
        <p className="address">{address}</p>
        <p className="city">{city}</p>
        <p className="state">{state}</p>
        <p className="pin">Pincode: {pin}</p>
        <p className="country">{country}</p>
      </div>
      <div className="copy" onClick={handleCopy}>
        <i className="material-icons md-18">content_copy</i>
      </div>
    </li>
  )
}

export default AddressItem;