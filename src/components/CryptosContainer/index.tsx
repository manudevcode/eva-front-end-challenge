import { 
  useReducer,
  useEffect,
  FunctionComponent,
  useState,
} from "react";
import {  ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { GetCryptos } from "../../services";
import CryptosList from "./CryptosList";
import ListLoader from "../ListLoader";
import Filters from "./Filters";
import { 
  cryptosReducer,
  initialCryptos,
  CryptoActions,
} from "../../reducers/cryptos";
import { Crypto, CryptoOrder } from "../../types/cryptoTypes";

/**
 * CryptosContainer
 * @description Simple container to show cryptos list and filters
 */ 
export const CryptosContainer: FunctionComponent = () => {
  
  const [search, setSearch] = useState('')
  const [cryptos, dispatchCryptos] = useReducer(cryptosReducer, initialCryptos)
  const [order, setOrder] = useState<CryptoOrder>(CryptoOrder.Ascendant)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    (async function (){ 
      // Call cryptos API
      let { data } = await GetCryptos();
      let cryptosList: Crypto[] = [];

      for (const cryptoKey in data.RAW) {
        if (Object.prototype.hasOwnProperty.call(data.RAW, cryptoKey)) {
          cryptosList.push({
            key: cryptoKey,            
            image: `https://www.cryptocompare.com${data.RAW[cryptoKey]["USD"]["IMAGEURL"]}`,
            price: data.RAW[cryptoKey]["USD"]["PRICE"],
            marketCap: data.RAW[cryptoKey]["USD"].MKTCAP,
            circulatingSupply: data.RAW[cryptoKey]["USD"].SUPPLY,
            name: data.RAW[cryptoKey]["USD"]["FROMSYMBOL"],
            lowDay: data.RAW[cryptoKey]["USD"]["LOWDAY"],
            highday: data.RAW[cryptoKey]["USD"]["HIGHDAY"],
            openDay: data.RAW[cryptoKey]["USD"]["OPENDAY"],
          });
        }
      }

      dispatchCryptos({
        type: CryptoActions.SetCryptos,
        payload: {
          data: cryptosList,
          loading: false
        }
      })
    })();
  }, [])

  useEffect(() => {
    dispatchCryptos({
      type: CryptoActions.Filter,
      payload: {
        filterField: filter,
        order,
      }
    })
  }, [order, filter])

  /**
   * Call `dispatchCryptos` width the filter given
   * @param e ChangeEventHandler<HTMLSelectElement>
   */
  const onFilterChange = (e: any) => {
    let value: string = e.target.value; // name | price | marketCap | circulatingSupply
    setFilter(value);
    dispatchCryptos({
      type: CryptoActions.Filter,
      payload: {
        filterField: filter,
        order,
      }
    })
  }

  /**
   * Call `dispatchCryptos` width the order given
   */
  const changeOrder = () => {
    setOrder(order === CryptoOrder.Ascendant ? CryptoOrder.Descendant : CryptoOrder.Ascendant);
  }

  /**
   * Call `dispatchCryptos` width the search given 
   */
  const onSearch = (e: any) => {
    let value: string = e.target.value;
    setSearch(value.toLowerCase());
  }

  return (
    <div id="cryptos-container" className="container p-5 md:rounded-md mx-auto lg:my-8 md:my-4 w-full">
      <div className="divide-y-2 divide-grey-600 divide-solid">
        <div className="mb-2">
          <h1 className="lg:text-3xl text-2xl font-semibold	text-gray-700	">
            Cryptos list
          </h1>  
          <h2 className="lg:text-2xl text-xl	text-gray-600	">
          Check the following list of the most famous crypto currencies on the market.
          </h2>        
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          <p className="text-xl	text-blue-500	my-3 flex items-center">
            You can filter them with the fields below
            <ArrowDownIcon className="w-5 h-5 visible lg:invisible"/>
            <ArrowRightIcon className="w-5 h-5 invisible sm:invisible md:invisible lg:visible"/>
          </p>
          <Filters 
            changeOrder={changeOrder}
            changeFilter={onFilterChange}
            search={onSearch}
            currentFilter={filter}
            currentOrder={order}
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {
                cryptos.loading ? <ListLoader/> : <CryptosList cryptos={cryptos.data} search={search}/>
              }       
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CryptosContainer;

