import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Header from './HeaderSearch';
import ContentSearch from './ContentSearch';

import data from './data.json';


/*
var data = [];
fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
  .then( response => response.json() )   
  .then( json => {
    console.log("json", json)
    data = json 
  });

*/

class SearchInput extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      loading: false,
      activities: [],
      searchFilter: ''
    };
    console.log(this.state)

  }

  componentDidMount() {
    console.log('componentDidMount')
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({loading: true}, this.updateData);
    }
  }
/*
  handleSearch(val) {
    console.log("val = ", val)
    this.setState({
      searchFilter: val,
      loading: true
    });
  }
*/
  handleSearch2(e) {
    console.log("handleSearch = ", e.target.value)


    this.setState({
      searchFilter: e.target.value,
      loading: true
    });
  }

  handleSearch(e) {
    this.setState({
      searchFilter: e.target.value,
      loading: true
    });
/*
    console.log('handleSearch')
    let val = e.target.value;
    if (val === '') {
      console.log("val empty")
      this.setState({
        filtered: this.state.activities
      });
    } else {
*/
      //const {activities, searchFilter} = this.state;
/*
      const filter =
        searchFilter !== '' &&
      (e => e.actor.login.match(new RegExp(searchFilter)));
*/
/*
      console.log("val not empty - ", val)
      const {activities} = this.state;
      console.log("activities = ", activities)
      const filtered = activities.filter(
        element => {
          console.log(element, element.color, element.color.match(new RegExp(val)))
          return element.color.match(new RegExp(val)) 
        }
      )*/
      //[]
      /*activities.filter(
        a => a.actor && a.actor.login.match(txt)
      );*/
      /*
      this.setState({
        filtered
      });
      console.log(activities, filtered)*/
    //}
  };


  onComponentRefresh() {
    console.log('onComponentRefresh')
    this.setState({loading: false});
  }

  updateData() {


    this.setState(
      {
        loading: false,
        activities: []
      },
      this.props.onComponentRefresh
    );

    const {activities, searchFilter} = this.state;
console.log(activities, searchFilter)
    const filter =
      searchFilter !== '' && (element => element.color.match(new RegExp(searchFiltre)));
      //(e => e.actor.login.match(new RegExp(searchFilter)));
      //element => {
      //  console.log(element, element.color, element.color.match(new RegExp(val)))
      //  return element.color.match(new RegExp(val)) 
      //}

      const fetchDataOrCache = () => Promise.resolve(activities);

      // Use cached data if we have it
      return fetchDataOrCache()
        .then(json => json || data
          /*{
          console.log("json0 = ", json)
          return json.length > 0 ? json :
            fetch("https://epam-fe-homework-15.firebaseio.com/colors.json").then(data => data.json())
        }*/)
        .then(json => {
          console.log("json = ", json)
          return (filter ? json.filter(filter) : json) 
          
        })
        .then(json => {
          if (activities.length === 0) {
            this.setState({activities: json});
          }
          return json;
        })
        //.then(json => json.slice(0, 4));




    // Use cached data if we have it
/*    return fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
      .then( response => response.json() )   
      .then(json => (filter ? json.filter(filter) : json))
      .then(json => {
        if (activities.length === 0) {
          this.setState({activities: json});
        }
        return json;
      })
      */
  }   
    
  render() {
    console.log('render')
    const {loading} = this.state;

    return (
      <div className="component-search-input">
        <div>
          <input
            type="search"
            onChange={this.handleSearch.bind(this)}
            placeholder="Color's name, tags"
          />
           <ContentSearch
            requestRefresh={loading}
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            fetchData={this.updateData.bind(this)}
        />
        </div>
      </div>
    );
  }
}

export default SearchInput;