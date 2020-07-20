import React from 'react';
import Icon from './core/Icon'
import Slider from './core/Slider';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icolor: "blue"
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        if (this.state.icolor === "blue") {
            this.setState({
                icolor: "pink"
            });
        } else {
            this.setState({
                icolor: "blue"
            });
        }
    }

    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="directions_walk" iconColor={this.state.icolor} />
                <button className="btn btn-dark btn-sm" onClick={this.onButtonClick}>
                    Change your sex
                </button>
                <p>{this.props.steps} steps</p>                
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.steps}
                />
            </div>
        );
    }
}

export default Person;