import { FunctionComponent } from 'react'

interface FormatNumberProps {
  number: number,
}

/**
 * FormatNumber
 * @description Format
 */ 
export const FormatNumber: FunctionComponent<FormatNumberProps> = ({ number}) => {
  let str = number.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let formatedNumber = str.join(".");
  return <>{ formatedNumber }</>
}

export default FormatNumber;

