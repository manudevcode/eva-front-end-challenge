
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import CryptosListItem from '.';

/*
 * CryptosListItem
 * Add description for your component
 */
describe('<CryptosListItem />', () => {

  let component: RenderResult;

  beforeEach(() => {

    let cryptoData = {
      key: 'key',            
      image: `https://www.cryptocompare.com/media/37746251/btc.png`,
      price: 10,
      marketCap: 11,
      circulatingSupply: 12,
      name: 'BTC',
      // fields not showing
      lowDay: 9,
      highday: 13,
      openDay: 9,
    }

    component = render(
      <table>
        <tbody>
          <CryptosListItem key={cryptoData.key} crypto={cryptoData} />
        </tbody>
      </table>
    );
  })

  it('should be in the DOM', () => {
    expect(
      component.container
    ).toBeInTheDocument();
  })

  it('render correclty crpyto fields', () => {
    let tdElements = component.container.getElementsByTagName('td');
    expect(tdElements).toHaveLength(4)
  }) 
  
  it('show crptyo name', () => {
    let tdElements = component.container.querySelector('td:nth-child(1)');
    expect(tdElements?.textContent).toEqual('BTC');
  }) 

  it('show crptyo price', () => {
    let tdElements = component.container.querySelector('td:nth-child(2)');
    expect(tdElements?.textContent).toEqual('$10USD');
  }) 

  it('show crptyo marketCap', () => {
    let tdElements = component.container.querySelector('td:nth-child(3)');
    expect(tdElements?.textContent).toEqual('11');
  }) 

  it('show crptyo circulatingSupply', () => {
    let tdElements = component.container.querySelector('td:nth-child(4)');
    expect(tdElements?.textContent).toEqual('12');
  }) 
})

