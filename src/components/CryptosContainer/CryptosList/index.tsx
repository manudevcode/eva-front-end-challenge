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
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-auto">

        <table className="min-w-full divide-y divide-gray-200 relative table-fixed">
          <thead className="bg-gray-50">
            <tr>    
              <th scope="col" className="lg:px-6 px-2 py-3 sticky top-0 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th scope="col" className="lg:px-6 px-2 py-3 sticky top-0 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th scope="col" className="lg:px-6 px-2 py-3 sticky top-0 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
                Market Cap
              </th>
              <th scope="col" className="lg:px-6 px-2 py-3 sticky top-0 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
                Circulating supply
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
      </div>
    </div>
  )
}

export default CryptosList;
