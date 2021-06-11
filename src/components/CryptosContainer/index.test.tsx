
import React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import CryptosContainer from '.';
import { CryptoActions, cryptosReducer } from '../../reducers/cryptos';


/*
 * CryptosContainer
 * Add description for your component
 */
describe('<CryptosContainer />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<CryptosContainer />);
  })

  describe('Change cryptos reducer', () => {
    it('returns new state for "set" action type', () => {
      const initialState = {
        data: [],
        loading: true,
      };
      
      const setAction = {
        type: CryptoActions.SetCryptos,
          payload: {
            data: [{
              key: 'key',            
              image: `https://www.cryptocompare.com`,
              price: 0,
              marketCap: 0,
              circulatingSupply: 0,
              name: '',
              lowDay: 0,
              highday: 0,
              openDay: 0,
            }],
            loading: false
          }
      }
      const updatedState = cryptosReducer(initialState, setAction);
      expect(updatedState.data).toHaveLength(1);
    });
  })
})

