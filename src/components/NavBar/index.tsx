import { FunctionComponent } from "react";

/**
 * NavBar Component
 * @description Simple navigation of the application
 * @example <NavBar />
 */
export const NavBar: FunctionComponent = () => {
  
  return (
    <nav className="navbar bg-gray-700 flex items-center p-3 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-white">
        <img className="h-8 mx-3" src="/logo128.png" alt="" />
        <span className="font-semibold text-xl tracking-tight">Crypto's Fan</span>
      </div>
      <div className="w-full flex items-center">
        <div className="flex-grow">
        </div>
        <div>                    
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

