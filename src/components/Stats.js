import React from 'react'

const Stats = (props) => {
  const {option, optionCount, totalOfVotes, chosen} = props
  return (<div>
    {
      chosen && (<div>Your
        <br/>
        vote</div>)
    }
    <p>Would you rather {option}</p>
    <div>
      <div></div>
    </div>
    <p>{optionCount}
      out of {totalOfVotes}
      votes
    </p>
  </div>)
}
export default Stats
