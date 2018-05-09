import React, { Component } from 'react';

class ColorItem extends React.Component {
  render () {
    const { selected, availabled } = this.props
    let isSelected = this.props.type == 'selected'
    let classes = ['color', this.props.type];

    return (
      <div className={classes.join(' ')}  style={{ backgroundColor: isSelected ? selected.color : availabled.color }}>
        {isSelected ?  
          <a href="#" className="add" onClick={() => this.props.moveColor(selected.color)}>
            <i className="material-icons">add</i>
            Add
          </a>
        :
          <a href="#" className="cancel" onClick={() => this.props.returnColor(availabled.color)}>
            <i className="material-icons">cancel</i>
          </a>
      }
      </div>
    )
  }
}

export default ColorItem;