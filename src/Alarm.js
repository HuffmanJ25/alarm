import React, {Component} from 'react'
import DateComponent from './Date'
import Time from './Time'
import Countdown from './Countdown'
import Paper from 'material-ui/Paper'
import ActionAlarmAdd from 'material-ui/svg-icons/action/alarm-add'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'
import ReactHowler from 'react-howler'


class Alarm extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      hour: 6,
      minute: 30,
      period: "AM",
      alarmTime: 0,
      timeFromAlarm: 0
    };
    this.handleHourSlider = this.handleHourSlider.bind(this);
    this.handleMinuteSlider = this.handleMinuteSlider.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAlarmAdd = this.handleAlarmAdd.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.state.time === this.state.alarmTime ? "" : ""
    this.setState({time: new Date().toLocaleTimeString()});
  }

  handleHourSlider = (value) => {
    value === 0 ? value = 12 : value
    this.setState({ hour: value })
  }

  handleMinuteSlider = (value) => {
    value < 10 ? value = "0" + value : value
    this.setState({ minute: value })
  }

  handleToggle = () => {
    this.state.period === "AM" ? this.setState({period: "PM"}) : this.setState({period: "AM"})
  }

  handleAlarmAdd = () => {
    let hour
    this.state.period === "PM" ? hour = this.state.hour + 12 : hour = this.state.hour
    const minute = this.state.minute
    const time = new Date();
    time.setHours(hour,[minute],[0])
    hour === new Date().getHours() && minute < new Date().getMinutes() ? time.setDate(time.getDate() + 1) : time
    hour < new Date().getHours() ? time.setDate(time.getDate() + 1) : time
    const alarm = time.toLocaleTimeString()
    const timeFromAlarm = moment(time).fromNow()
    this.setState({
      alarmTime: alarm,
      timeFromAlarm: timeFromAlarm
    })
  }

  render(){
    return(
      <Paper>
        <DateComponent />
        <h3>Current Time | {this.state.time}</h3>
        <h3>Alarm Time | {this.state.hour}:{this.state.minute} {this.state.period}  {this.state.timeFromAlarm !== 0 && <span>| {this.state.timeFromAlarm} </span>}</h3>
        <Time onChange={this.handleHourSlider} slider={this.state.hour} max={11} sliderTitle="Hours" />
        <Time onChange={this.handleMinuteSlider} slider={this.state.minute} max={60} sliderTitle="Minute" />
        <Toggle label="AM/PM"
                labelPosition="right"
                onToggle={this.handleToggle}
                />
        <Countdown />
        <RaisedButton
          icon={<ActionAlarmAdd />}
          onClick={this.handleAlarmAdd}
        />
        <ReactHowler
          src={window.onload = function() {
        return './sounds/Tornado.mp3';
    }}
          playing={true}
          format="mp3"
          loop='true'
        />
      </Paper>
    )
  }
}

export default Alarm
