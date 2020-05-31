import { SET_CURRENT_ACCOUNT, SET_LIST_ACCOUNTS } from './../constants'

export const setCurrentAccount = (value) => ({ type: SET_CURRENT_ACCOUNT, value });

export const setListAccounts = (value) => ({ type: SET_LIST_ACCOUNTS, value });