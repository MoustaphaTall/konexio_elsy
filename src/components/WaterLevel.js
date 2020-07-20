import React from 'react';
import Icon from './core/Icon';

class WaterLevel extends React.Component {
    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="local_drink" iconColor="blue" />
                <p>{this.props.water}</p>
            </div>
        );
    }
}

export default WaterLevel;