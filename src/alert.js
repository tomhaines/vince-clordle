import React from 'react';

class Alert extends React.Component {
    render() {
        return (
        <div className="alertContainer">
            {this.props.alerts.map((alert, index) => {
            return (
                <div key={index} className={"alert " + (this.props.gameComplete ? "game-complete" : "")}>
                {alert.text}
                </div>
            )
            })}
        </div>
        )
    }
}

export default Alert;