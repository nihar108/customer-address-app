const REQUEST = 'ADDRESSES_REQUEST';
const RECEIVE = 'ADDRESSES_RECEIVE';
const ERROR = 'ADDRESSES_ERROR';

const addresses = (state = {
  items: {}
}, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        items: {
          ...state.items,
          [action.customerId]: {
            isFetching: true,
            addresses: []
          }
        }
      }
    case RECEIVE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.customerId]: {
            isFetching: false,
            addresses: [...action.response]
          }
        }
      }
    default:
      return state
  }
}

export default addresses;