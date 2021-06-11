
import React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import ListLoader from '.';

/*
 * ListLoader
 * Add description for your component
 */
describe('<ListLoader />', () => {

  let component: RenderResult;

  beforeEach(() => {
    component = render(<ListLoader/>);
  })

  it('should be in the DOM', () => {
    expect(
      component.container
    ).toBeInTheDocument();
  })
})

