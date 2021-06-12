import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;
export const GetCryptos = () => axios.get(`${BASE_URL}/data/top/mktcapfull?limit=50&tsym=USD`);
// export const GetCryptos = () => axios.get(`${BASE_URL}/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD`);