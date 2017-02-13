import React from 'react'
import moment from 'moment'

class AlarmDate extends React.Component {

  render(){
    const now = moment().format("ddd MMM Do YY");
    return(
      <div>
        <h2>{now}</h2>
      </div>
    )
  }
}

export default AlarmDate
