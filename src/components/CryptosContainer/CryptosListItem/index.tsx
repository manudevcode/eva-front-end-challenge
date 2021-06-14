import { FunctionComponent } from 'react'
import { Crypto } from '../../../types/cryptoTypes';
import FormatNumber from '../../FormatNumber';

interface CryptosListItemProps {
  key: string,
  crypto: Crypto,
}

/**
 * CryptosListItem
 * @description Item to show in <CryptosList /> component
 * @props CryptosListItemProps
 */ 
export const CryptosListItem: FunctionComponent<CryptosListItemProps> = ({ crypto }) => {
    
  return (
    <tr data-testid="crypto" className="hover:bg-gray-200">
      <td className="lg:px-6 px-2 py-1 whitespace-nowrap">
        <span className="flex items-center">
          <span className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={crypto.image} alt={`icon of ${crypto.name}`} />
          </span>
          <span className="ml-4">
            <span className="text-sm font-medium text-gray-900">{ crypto.name }</span>
          </span>
        </span>
      </td>
      <td className="lg:px-6 px-2 py-1 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          $ 
          <span className="text-sm text-gray-900">
            <FormatNumber number={ crypto.price } />
          </span>
          USD
        </span>
      </td>
      <td className="lg:px-6 px-2 py-1 whitespace-nowrap">
        <span className="text-sm text-gray-500">
          <FormatNumber number={ crypto.marketCap } />
        </span>
      </td>
      <td className="lg:px-6 px-2 py-1 whitespace-nowrap text-sm text-gray-500">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          <span className="text-sm text-gray-900">
          <FormatNumber number={ crypto.circulatingSupply } />
        </span>
        </span>
      </td>
    </tr>
  )
}

export default CryptosListItem;