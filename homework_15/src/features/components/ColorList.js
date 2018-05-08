import React, { Component } from 'react';

function Color(props) {
    //console.log("props = ", props)

    return (
        <div className="color" style={{backgroundColor: props.color}}>
            <button onClick={props.add}><i className="material-icons">plus</i></button>
        </div>);
}

class ColorList extends Component {
  
  add() {
    return function(idx) {
      console.log(idx)
      this.setState({colors: this.state.colors.splice(idx, 1)})
    }
  }

  render() {

    return (
      <div>
        <ul className="color-list">
          {this.props.colors.map((color, i) => {
            return <Color key={i} {...color} add={this.add(i)}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default ColorList;
