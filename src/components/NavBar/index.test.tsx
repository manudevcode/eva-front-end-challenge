
import React, { Component } from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import NavBar from '.';

/*
 * NavBar
 * Add description for your component
 */
describe('Testing: <NavBar />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<NavBar/>);
  })

  it('Should be in the DOM', () => {
    expect(
      component.container
    ).toBeInTheDocument();
  })

  it('Link should have a github target blank link', () => {
    let sourceCodeLink = component.container.querySelector('#source-code-link');
    
    expect(
      sourceCodeLink
    ).toHaveAttribute('href', 'https://github.com/manudevcode/eva-front-end-challenge');
    
    expect(
      sourceCodeLink
    ).toHaveAttribute('target', '_blank');

  })
})

