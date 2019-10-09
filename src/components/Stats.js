import React from 'react'
import { Progress } from 'semantic-ui-react'


const Stats = (props) => {
  const {option, optionCount, totalOfVotes, chosen} = props
  return (
<div className='row'>
    {chosen ?
    <div className='row'>
      <h4 className="ui green header">Your vote</h4>
      <h4 className="ui green header">Would you rather {option}</h4>
      <Progress value={optionCount} total={totalOfVotes} progress='ratio'  indicating/>
      <h5>{optionCount} out of {totalOfVotes} votes</h5>
    </div>
    :
    <div className='row'>
      <h4 className="ui grey header">Would you rather {option}</h4>
      <Progress value={optionCount} total={totalOfVotes} progress='ratio'  indicating/>
      <h5>{optionCount} out of {totalOfVotes} votes</h5>
    </div>
    }
</div>
  )
}
export default Stats
