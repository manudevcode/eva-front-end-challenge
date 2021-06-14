import { FunctionComponent } from 'react'
import CryptosContainer from '../CryptosContainer'
import NavBar from '../NavBar'
import Footer from '../Footer'

/**
 * App Component
 * @description Main component of the application
 * @example <App />
 */
export const App: FunctionComponent = (_props) => {
  
  return (
    <div className="app bg-gray-100 flex flex-col h-full justify-between">
      <NavBar />
      <CryptosContainer />
      <Footer/>
    </div>
  )
}

export default App;