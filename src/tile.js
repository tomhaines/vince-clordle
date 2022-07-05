import React from 'react';

class Tile extends React.Component {
    render() {
      
      return (
        <div className={"tile " + (this.props.status) } style={{"--index": this.props.index, "--tile-bg-color-name": "var(--tile-" + this.props.status + ")"}} >
          {this.props.value}
        </div>
      )
    }
}
export default Tile;