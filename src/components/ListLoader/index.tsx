/**
 * ListLoader
 * @description Show a list loader while calling an api 
 * @example { loading ? <ListLoader /> : <List data={myData}/> > }
 */ 
export const ListLoader = () => {
  
  return (
    <div className="animate-pulse border border-light-blue-300 shadow rounded-md p-4 w-full mx-auto space-y-4">
      <div className="flex space-x-4 place-items-center">
        <div className="rounded-full bg-gray-500 h-6 w-7"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
      </div>
      <div className="flex space-x-4 place-items-center">
        <div className="rounded-full bg-gray-500 h-6 w-7"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
        <div className="h-4 bg-gray-500 rounded w-3/12"></div>
      </div>
    </div>
  )
}

export default ListLoader;
