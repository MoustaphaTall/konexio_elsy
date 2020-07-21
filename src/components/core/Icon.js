import React from 'react';

class Icon extends React.Component {
    render() {
        return (
            <p 
                className="material-icons" 
                style={{fontSize: 100, color: this.props.iconColor}}>
                {this.props.name}
            </p>
        );
    }
}

export default Icon;