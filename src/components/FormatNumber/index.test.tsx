
import React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import FormatNumber from '.';

/*
 * FormatNumber
 * Add description for your component
 */
describe('<FormatNumber />', () => {

  let component: RenderResult;

  beforeEach(() => {
    component = render(<FormatNumber number={100000000.345}/>);
  })

  it('format number correctly 100,000,000.345', () => {
    let formatedNumber = component.getByText('100,000,000.345');
    expect(formatedNumber).toBeInTheDocument()
  })
})

