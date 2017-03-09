import React, {Component} from 'react'
import Slider from 'material-ui/Slider'
import './css/time.css'


class Time extends Component {
  handleSlider = (event, value) => {
    this.props.onChange(value)
  }

  render(){
    return(
      <div>
        <h3 className='sliderTitle'>{this.props.sliderTitle}: {this.props.slider}</h3>
        <Slider step={1}
                min={0}
                max={this.props.max}
                value={this.props.slider}
                onChange={this.handleSlider}
                />

      </div>
    )
  }
}

export default Time
