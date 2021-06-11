import { FunctionComponent } from 'react'
import CryptosContainer from '../CryptosContainer'
import NavBar from '../NavBar'

/**
 * App Component
 * @description Main component of the application
 * @example <App />
 */
export const App: FunctionComponent = (_props) => {
  
  return (
    <div className="app bg-gray-100 h-full">
      <NavBar />
      <CryptosContainer />
    </div>
  )
}

export default App;