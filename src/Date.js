import React from 'react'
import moment from 'moment'
import './css/date.css'

class AlarmDate extends React.Component {

  render(){
    const now = moment().format("ddd MMM Do YY");
    return(
      <div>
        <h2 className='date'>{now}</h2>
      </div>
    )
  }
}

export default AlarmDate
