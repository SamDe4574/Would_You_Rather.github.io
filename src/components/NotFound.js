import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='ui grid centered'>
      <div className='row'>
        <h1>This Page does not exist.</h1>
      </div>
      <div className='row'>
        <Link to={`/`}>Take Me Home</Link>
      </div>
    </div>
)

}
export default NotFound
