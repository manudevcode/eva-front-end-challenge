import { ChangeEventHandler, FunctionComponent, MouseEventHandler } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { CryptoOrder } from '../../../types/cryptoTypes';

interface FiltersProps {
  changeOrder: MouseEventHandler
  search: ChangeEventHandler
  changeFilter: ChangeEventHandler
  currentFilter: string
  currentOrder: CryptoOrder
}

/*
 * Filters
 * Add description for your component
 */ 
export const Filters: FunctionComponent<FiltersProps> = (props: FiltersProps) => {
  
  const { changeOrder, changeFilter, search, currentFilter, currentOrder } = props;

  return (
    <div className="flex flex-wrap lg:flex-nowrap">  
      <input 
        type="text"
        placeholder="Search name e.g. BTC"
        className="px-5 h-8 rounded-md m-2 bg-white shadow text-gray-800 hover:bg-gray-200 focus:outline-none w-full"
        onChange={search}
      /> 
      <div className="flex flex-nowrap w-full">
        <select id="filter" value={currentFilter} className="w-full px-5 h-8 rounded-md m-2 bg-white shadow text-gray-800 hover:bg-gray-200 focus:outline-none" onChange={changeFilter}>
          <option value="" disabled>Filter by:</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="marketCap">Market Cap</option>
          <option value="circulatingSupply">Circulating supply</option>
        </select>      
        <button 
          data-testid="change-order"
          className="button px-5 h-8 rounded-md m-2 bg-white shadow text-gray-800 disabled:opacity-0 hover:bg-gray-200 focus:outline-none"
          type="button" 
          onClick={changeOrder}
          disabled={currentFilter === ''}>
          {
            currentOrder === CryptoOrder.Descendant 
              ? <span data-testid="arrow-down-icon">
                <ArrowDownIcon className="block h-4 w-4 text-gray-800" aria-hidden="true" />
              </span>
              : <span data-testid="arrow-up-icon">
                <ArrowUpIcon className="block h-4 w-4 text-gray-800" aria-hidden="true" />
              </span>
          }
        </button>
      </div>        
    </div>
  )
}

export default Filters;
