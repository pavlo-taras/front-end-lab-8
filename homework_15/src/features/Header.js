import React, { Component } from 'react';
import SearchForm from './SearchForm'
import ColorItem from './ColorItem'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='header'>
        <SearchForm handleSearch={this.props.handleSearch} />
        <div className="right">
          {this.props.availables.length == 0 ?
            <div className="empty-availables">
              <div className="no-availabled lavender"></div>
              <div className="no-availabled periwinkle"></div>
              <div className="no-availabled mediumpurple"></div>
            </div>
            : 
             <div className="availables">
              {this.props.availables.map((availabled, i) => {
                return (
                  <ColorItem
                    type="availabled"
                    key={i}
                    availabled={availabled}
                    returnColor={this.props.returnColor}/>
                )
              })}
            </div>
          }
          <p className="count-selects">Colors: {this.props.cntSelects}</p>
        </div>
      </div>
    )
  }
}

export default Header