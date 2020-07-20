import React from 'react';
import Icon from './core/Icon'
import Slider from './core/Slider';

class HeartRate extends React.Component {
    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="favorite" iconColor="red" />
                <p>{this.props.heart} BPM</p>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.heart}
                />
            </div>
        );
    }
}

export default HeartRate;