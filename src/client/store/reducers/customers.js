const REQUEST = 'CUSTOMERS_REQUEST';
const RECEIVE = 'CUSTOMERS_RECEIVE';
const ERROR = 'CUSTOMERS_ERROR';
const SELECT_CUSTOMER = 'SELECT_CUSTOMER';

const customers = (state = {
  isFetching: false,
  items: [],
  selectedCustomer: ''
}, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE:
      return {
        ...state,
        isFetching: false,
        items: [...action.response]
      }
    case SELECT_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action._id
      }
    default:
      return state
  }
}

export default customers;