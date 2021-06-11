import { Reducer } from "react";
import { Crypto } from "../types/cryptoTypes";
import { sortByField } from "../utils";

// Initial state for `cryptos` reducer
export const initialCryptos: CryptoState = {
  data: [],
  loading: true,
}

// Actions to use on the reducer function
export enum CryptoActions {
  SetCryptos = 0,
  Filter= 1,
}

// Type to use in 'cryptosReducer' function
export type Action = { 
  type: CryptoActions,
  payload: any
}

// Type to use in `cryptos` reducer
export type CryptoState = {
  data: Crypto[],
  loading: boolean
}

// Structure to call each reducer function for the corresponding action
export const CRYPTO_REDUCER_ACTIONS = { 
  [CryptoActions.SetCryptos]: (_state: CryptoState, action: Action): CryptoState => {
    return action.payload;
  },
  [CryptoActions.Filter]: (state: CryptoState, action: Action): CryptoState => {
    let filterRes = sortByField(state.data, action.payload.filterField, action.payload.order);
      return { ...state, data: filterRes }; 
  }
}

/**
 * Crypto reducer funtion
 * @param state CryptoState
 * @param action Action
 * 
 * @description Reducer function to set and filter crypto data
 * @example 
 * // Calling this dispatch function should
 * // set the list of supplied data `data` 
 * // and change the loading property to false
 * dispatchCryptos({
 *    type: CryptoActions.SetCryptos,
 *    payload: {
 *      data: cryptosList,
 *      loading: false
 *    }
 * })
 * 
 */
export const cryptosReducer: Reducer<CryptoState, Action> = (state: CryptoState, action: Action): CryptoState => {
  const reducerAction = CRYPTO_REDUCER_ACTIONS[action.type];
  return reducerAction ? reducerAction(state, action) : state;
}
