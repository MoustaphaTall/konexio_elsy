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
const WATER = 1.5;

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
    let validTemperature = 20;
    let validHeart = 120;
    let validSteps = 10000;    
    if (this.state.steps < 10000)            {
      validSteps = this.state.steps;
    }
    if (this.state.temperature < 20) {
      validTemperature = this.state.temperature;
    }
    if (this.state.heart < 120) {
      validHeart = this.state.heart;
    }

    if (element === "temperature") {
      if (value - this.state.temperature > 0) {
        this.setState({
           /* température actuelle - température totale (> 20) donne chaque degré de temp en plus,
            qui prennent chacun un facteur 0.02. Le résultat est ajouté à water  */
          water: WATER + ((this.state.temperature - 20) * 0.02) + ((this.state.heart - validHeart) * 0.0008) + ((this.state.steps - validSteps) * 0.00002)
        });
      } else {
        this.setState({
          water: WATER + ((this.state.temperature - 20) * 0.02) + ((this.state.heart - validHeart) * 0.0008) + ((this.state.steps - validSteps) * 0.00002)
        });
      }
    }

    if (element === "heart") {
      if (value - this.state.heart > 0) {
        this.setState({
          water: WATER + ((this.state.heart - 120) * 0.0008) + ((this.state.temperature - validTemperature) * 0.02) + ((this.state.steps - validSteps) * 0.00002)
        });
      } else {
        this.setState({
          water: WATER + ((this.state.heart - 120) * 0.0008) + ((this.state.temperature - validTemperature) * 0.02) + ((this.state.steps - validSteps) * 0.00002)
        });
     }
    }

    if (element === "steps") {
      if (value - this.state.steps > 0) {
        this.setState({
          water: WATER + ((this.state.steps - 10000) * 0.00002) + ((this.state.heart - validHeart) * 0.0008) + ((this.state.temperature - validTemperature) * 0.02)
        });
      } else {
        this.setState({
          water: WATER + ((this.state.steps - 10000) * 0.00002) + ((this.state.heart - validHeart) * 0.0008) + ((this.state.temperature - validTemperature) * 0.02)
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