import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'

export const Footer: FunctionComponent = (_props) => {
  return (
    <footer className="bg-gray-100 p-8 sm:py-12">
      <div className="flex">
        <div className="m-auto text-gray-800 text-center">
          <p>I know i can be a great member of your team and i'm very excited to be, thank you for the opportunity.</p>
          <p>Developed by <a href="https://github.com/manudevcode" target="_blank" rel="noopener noreferrer"><b>Manuel García</b></a></p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
}

export default Footer;

