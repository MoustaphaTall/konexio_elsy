import React from 'react';
import RCSlider from 'rc-slider';
/* import 'rc-slider/assets/index.css'; mieux vaut l'importer dans App,
  comme ça le css n'est pas importé plusieurs fois */

class Slider extends React.Component {
    render() {
        return (
            <RCSlider
                max={this.props.max}
                min={this.props.min}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        )
    }
}

export default Slider;