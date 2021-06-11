import { CryptoOrder } from "../types/cryptoTypes";

/**
 * @description Sort an array by a given field
 * @param array Array to filter
 * @param field Name of field to sort by
 * @returns `array` sorted
 */
export const sortByField = (array: any[], field: string, order: CryptoOrder = CryptoOrder.Ascendant) => {
  const compare = (a: any, b: any ) => {
    if (order === CryptoOrder.Ascendant) {
      return  a[field] < b[field] ? -1 : 1;
    } else {
      return  a[field] > b[field] ? -1 : 1;
    }
  }

  return array.sort(compare)
}