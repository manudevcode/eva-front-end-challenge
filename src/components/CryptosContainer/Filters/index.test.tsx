
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Filters from '.';
import { CryptoOrder } from '../../../types/cryptoTypes';

describe('<Filters />', () => {

  let component: RenderResult;

  const search = () => { }
  const changeOrder = () => {}
  const changeFilter = () => {}

  beforeEach(() => {
    component = render(
      <Filters 
        currentOrder={CryptoOrder.Ascendant}
        currentFilter="price"
        search={search}
        changeOrder={changeOrder}
        changeFilter={changeFilter}
      />
    );
  })

  it('it should change input text', () => {
    let input = component.getByPlaceholderText('Search name e.g. BTC');
    fireEvent.change(input, {
      target: { value: "btc" }
    })
    let inputChanged = component.getByDisplayValue('btc');
    expect(inputChanged).toBeInTheDocument();
  })

  it('it should show up icon', () => {
    let upIcon = component.getByTestId('arrow-up-icon');
    expect(upIcon).toBeInTheDocument();
  })

  it('it should show down icon', () => {
    component = render(
      <Filters 
        currentOrder={CryptoOrder.Descendant}
        currentFilter="price"
        search={search}
        changeOrder={changeOrder}
        changeFilter={changeFilter}
      />
    );
    let downIcon = component.getByTestId('arrow-down-icon');
    expect(downIcon).toBeInTheDocument();
  })

  it('order button it should disabled on load', () => {
    let button = component.getByTestId('change-order');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('disabled')).toBeDefined();
  })
})

