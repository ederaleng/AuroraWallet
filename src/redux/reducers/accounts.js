import { SET_CURRENT_ACCOUNT, SET_LIST_ACCOUNTS } from './../constants'

const initialAccounts = {
  account: null,
  listAccounts: [
  ]
};

const accountsReducer = (state = initialAccounts, action) => {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT:
      return { ...state, account: action.value }
    case SET_LIST_ACCOUNTS:
      return { ...state, listAccounts: action.value }
    default:
      return state;
  }
};

export default accountsReducer;