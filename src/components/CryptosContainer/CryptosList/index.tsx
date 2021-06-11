import { FunctionComponent } from 'react'
import { Crypto } from '../../../types/cryptoTypes'
import CryptosListItem from '../CryptosListItem';
import { InformationCircleIcon } from '@heroicons/react/solid';
interface CryptosListProps {
  cryptos: Crypto[],
  search: string,
}

/**
 * CryptosList
 * @description Table to list Crypto objects 
 * @props CryptosListProps
 */
export const CryptosList: FunctionComponent<CryptosListProps> = ({ cryptos, search }) => {

  return cryptos.length === 0 ? <div className="p-8 w-full bg-white flex flex-col items-center">
    <InformationCircleIcon className="w-8 h-8 text-gray-700"/>
    <div className="text-xl text-gray-800">No Cryptos finded</div>
    <div className="text-lg text-gray-800">Please try again in a moment.</div>
  </div> :(
    <table className="min-w-full divide-y divide-gray-200 relative table-fixed">
      <thead className="bg-gray-50 ">
        <tr>    
          <th scope="col" className="lg:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="lg:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th scope="col" className="lg:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Market Cap
          </th>
          <th scope="col" className="lg:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Circulating supply
          </th>
          <th scope="col" className="lg:px-6 px-2 py-3">
            <span className="sr-only">Show more</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        { 
          cryptos
            .filter(
              (crypto: Crypto) => search.length > 0 
                ? crypto.name.toLowerCase().indexOf(search) !== -1
                : crypto
            )
            .map( (crypto: Crypto) => <CryptosListItem key={crypto.key} crypto={crypto}/>)
        }
      </tbody>
    </table>
  )
}

export default CryptosList;
