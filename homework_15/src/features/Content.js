import React from 'react';
import ColorItem from './ColorItem';

class Content extends React.Component {
    constructor (props) {
      super(props)
    }
  
    render () {
      return (
        <div className='content'>
          {this.props.cntSelects == 0 && <p className="any-selected">There are no colors found</p>}
          {this.props.selects.map((selected, i) => {
            return (
              <ColorItem
                type="selected"
                key={i}
                selected={selected}
                moveColor={this.props.moveColor}
                disabledAddButton={this.props.disabledAddButton}
              />
            )
          })}
        </div>
      )
    }
}

export default Content;
