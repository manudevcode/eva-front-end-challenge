export type Crypto = {  
  key: string,
  image: string,
  price: number
  marketCap: number,
  circulatingSupply: number,
  name: string,
  lowDay: number,
  highday: number,
  openDay: number
}

// Order ascendant or descendant
export enum CryptoOrder {
  Ascendant = 0,
  Descendant= 1,
}