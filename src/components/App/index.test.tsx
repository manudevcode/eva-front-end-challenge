
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import App from '.';

/*
 * NavBar
 * Add description for your component
 */
describe('Testing: <App />', () => {
  let component: RenderResult;

  it('Should be in the DOM', () => {
    component = render(<App/>);
    expect(
      component.container
    ).toBeInTheDocument();
  })
})

