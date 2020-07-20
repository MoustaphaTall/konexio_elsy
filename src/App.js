import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import WaterLevel from './components/WaterLevel';
import TemperatureLevel from './components/TemperatureLevel'
import 'rc-slider/assets/index.css';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,      
    }

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }

  onHeartChange(val) {
    this.setState({
      heart: val
    });
    if (this.state.heart > 120) {
      this.calculateWater(val, "heart");
    }
  }

  onStepsChange(val) {
    this.setState({
      steps: val
    });

    if (this.state.steps > 10000) {
      this.calculateWater(val, "steps");
    }
  }

  onTemperatureChange(val) {
    this.setState({
      temperature: val
    });
    console.log(val - this.state.temperature);
    if (this.state.temperature > 20) {
      this.calculateWater(val, "temperature");      
    }
  }

  calculateWater(value, element) {    
    if (element === "temperature") {
      if (value - this.state.temperature > 0) {
        this.setState({
          water: this.state.water + 0.02
        });
      } else {
        this.setState({
          water: this.state.water - 0.02
        });
      }
    }

    if (element === "heart") {
      if (value - this.state.heart > 0) {
        this.setState({
          water: this.state.water + 0.0008
        });
      } else {
        this.setState({
          water: this.state.water - 0.0008
        });
     }
    }

    if (element === "steps") {
      if (value - this.state.steps > 0) {
        this.setState({
          water: this.state.water + 0.00002 //unsure about the values?
        });
      } else {
        this.setState({
          water: this.state.water - 0.00002
        });
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <WaterLevel water={this.state.water.toFixed(2)} />
          <Person steps={this.state.steps} min={MIN_STEPS} max={MAX_STEPS} onChange={this.onStepsChange} />
          <HeartRate heart={this.state.heart} min={MIN_HEART} max={MAX_HEART} onChange={this.onHeartChange} />
          <TemperatureLevel temperature={this.state.temperature} min={MIN_TEMPERATURE} max={MAX_TEMPERATURE} onChange={this.onTemperatureChange} />
        </div>
      </div>
    );
  }
}

export default App;