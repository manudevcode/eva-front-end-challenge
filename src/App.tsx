import React from "react";
import "./App.css";

export default class App extends React.Component<{} ,{ loading: boolean, cryptos: any}> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: false,
      cryptos: {},
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    const url =
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        let data;

        data = json.RAW;

        this.setState({
          loading: false,
          cryptos: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    let formattedData: any = [];

    Object.keys(this.state.cryptos).map((crypto: any) => {
      formattedData.push({
        key: crypto,
        price: this.state.cryptos[crypto]["USD"]["PRICE"],
        market_cap: this.state.cryptos[crypto]["USD"].MKTCAP,
        circulatingSupply: this.state.cryptos[crypto]["USD"].SUPPLY,
        name: this.state.cryptos[crypto]["USD"]["FROMSYMBOL"],
      });
    });

    return (
      <div className="App">
        <div>          
          <label>Filter By</label>
          <select>
            <option>Name</option>
            <option>Price</option>
            <option>Market Cap</option>
            <option>Circulating supply</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>

        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating supply</th>
          </tr>

          <tbody>
            {formattedData.map((data: any) => {
              return (
                <tr>
                  <td>Name: {data.name}</td>
                  <td>Price: {data.price}</td>
                  <td>Market Cap: {data.market_cap}</td>
                  <td>Circulating supply: {data.circulatingSupply}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
