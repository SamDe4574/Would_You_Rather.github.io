import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (<div className="not-found">
    <h1>This Page does not exist.</h1>
    <Link to={`/`} className="button action">Take Me Home</Link>
  </div>)

}
export default NotFound
