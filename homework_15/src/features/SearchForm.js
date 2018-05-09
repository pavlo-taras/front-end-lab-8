import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: props.searchText
    }
  }

  render () {
    let searchInputClasses = ['searchInput']

    if (this.props.searchVisible) {
      searchInputClasses.push('active')
    }
    return (
        <input
          className="search"
          type='text'
          value={this.state.searchText}
          onChange={this.props.handleSearch}
          placeholder="Color's name, tags" />
    )
  }
}

export default SearchForm;
