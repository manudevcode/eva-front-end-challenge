
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import CryptosList from '.';

describe('<CryptosList />', () => {
  it('render no cryptos finded', () => {
    let component = render(<CryptosList cryptos={[]} search=""/>);
    expect(
      component.getByText(/No Cryptos finded/i)
    ).toBeInTheDocument()
    component.unmount();
  })

  it('render cryptos from props', () => {    
    let cryptoData = [{
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
    }];
    
    let component = render(<CryptosList cryptos={cryptoData} search=""/>);
    let cryptos = component.getAllByTestId('crypto');
    expect(cryptos).toHaveLength(1);
    component.unmount();
  })
})

