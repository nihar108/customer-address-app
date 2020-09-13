const REQUEST = 'CUSTOMERS_REQUEST';
const RECEIVE = 'CUSTOMERS_RECEIVE';
const ERROR = 'CUSTOMERS_ERROR';
const SELECT_CUSTOMER = 'SELECT_CUSTOMER';

export const request = () => ({
  type: REQUEST,
});
export const receive = response => ({
  type: RECEIVE,
  response,
});
export const error = err => ({
  type: ERROR,
  err,
});
export const selectCustomer = _id => ({
  type: SELECT_CUSTOMER,
  _id
})

export const getCustomers = () => (dispatch, getState) => {
  const fetchReq = fetch('https://customeraddressapi.herokuapp.com/customers')
    .then(res => res.json())
    .then(res => {
      dispatch(receive(res));
    })
    .catch(err => {
      dispatch(error(err));
    });

  dispatch(request());

  return fetchReq;
}