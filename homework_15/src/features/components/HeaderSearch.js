import React, { Component } from 'react';
import SearchForm from './SearchForm'

class Header extends Component {
  constructor (props) {
    super(props)
    //this.state = {
    //  searchVisible: false
    //}
  }
  //showSearch () {
//    this.setState({
      //searchVisible: !this.state.searchVisible
//    })
//  }
  handleSubmit (val) {
    this.props.onSearch(val)
  }
  render () {
    return (
      <SearchForm onSubmit={(val) => this.handleSubmit(val)} />
    )
  }
}
Header.defaultProps = {
  title: 'Github activity',
  onSearch: () => { }
}
Header.propTypes = {
  //title: React.PropTypes.string,
  //onSearch: React.PropTypes.func
}

export default Header