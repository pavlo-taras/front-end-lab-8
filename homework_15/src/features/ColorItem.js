import React, { Component } from 'react';

class ColorItem extends React.Component {
  render () {
    const { selected, availabled } = this.props
    let isSelected = this.props.type == 'selected'
    let classes = ['color', this.props.type];
    let classesAdd = ["add"];
    let tags = (isSelected ? selected : availabled).tags.join(',')
    if (this.props.disabledAddButton) classesAdd.push("disabled");

    return (
      <div className={classes.join(' ')}  style={{ backgroundColor: isSelected ? selected.color : availabled.color }} data-tags={tags}>
        {isSelected ? 
          <a 
            href="#"
            className={classesAdd.join(' ')}
            onClick={(e) => this.props.disabledAddButton ? e.preventDefault() : this.props.moveColor(selected.color)} 
          >
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