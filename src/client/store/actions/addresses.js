const REQUEST = 'ADDRESSES_REQUEST';
const RECEIVE = 'ADDRESSES_RECEIVE';
const ERROR = 'ADDRESSES_ERROR';

export const request = (customerId) => ({
  type: REQUEST,
  customerId
});
export const receive = (customerId, response) => ({
  type: RECEIVE,
  customerId,
  response,
});
export const error = err => ({
  type: ERROR,
  err,
});

export const getAddresses = (customerId) => (dispatch, getState) => {
  const {addresses} = getState();
  if (addresses.items[customerId] && addresses.items[customerId].addresses.length) {
    return;
  }
  else {
    const fetchReq = fetch(`https://customeraddressapi.herokuapp.com/customers/${customerId}/addresses`)
      .then(res => res.json())
      .then(res => {
        dispatch(receive(customerId, res));
      })
      .catch(err => {
        dispatch(error(err));
      });
  
    dispatch(request(customerId));
  
    return fetchReq;
  }
}