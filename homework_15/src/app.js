import React from 'react';
import PropTypes from 'prop-types';

// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
const data = require('./features/components/data.json')

class Panel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      activities: [] /*data*/,
      filtered: [] /*data*/,
    }
  }

  componentDidMount() {
    //this.updateData();
    console.log("componentDidMount")

    fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
      .then(data => data.json())
      .then(data => {
        this.state.activities = data;
        this.state.filtered = data;
        this.updateData();
        //this.state.loading = false;
      }).catch(el => {
        console.log(el)
      })
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({loading: true}, this.updateData);
    }
  }

  onComponentRefresh () {
    console.log("onComponentRefresh")
    this.setState({ loading: false })
  }
  handleSearch (val) {
    console.log("handleSearch")
    this.setState({
      searchFilter: val,
      loading: true
    })
  }
  updateData () {
    let jason = {}
    const { activities, searchFilter } = this.state
    jason = activities.filter(e => e.tags.some(el => el.match(new RegExp(searchFilter))))

    if (activities.length === 0) {
      this.setState({ activities: jason })
    }
    return jason
  }
  render () {
    const { loading } = this.state
    return (
      <div className='panel'>
        <Header
          onChange={(val) => this.handleSearch(val)} 
          />
        <Content
          onComponentRefresh={(e) => this.onComponentRefresh(e)}
          requestRefresh={loading}
          fetchData={() => this.updateData()} />
      </div>
    )
  }
}

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activities: []
    }
  }
  
  componentDidMount () {
    console.log("componentDidMount Content")
    this.updateData()
  }

  componentWillReceiveProps (nextProps) {
    console.log("componentWillReceiveProps Content")

    if ((nextProps.requestRefresh !== this.props.requestRefresh) && nextProps.requestRefresh) {
      this.updateData()
    }
  }
  updateData () {
    this.setState({
      activities: this.props.fetchData()
    });
    this.props.onComponentRefresh()
  }
  render () {
    const { loading } = this.props
    console.log("Loading = ", loading)
    const { activities } = this.state
    return (
      <div className='content'>
        {loading && <div>Loading</div>}
        {activities.map((activity, i) => {
          return (
            <ColorItem key={i} activity={activity} />
          )
        })}
      </div>
    )
  }
}
Content.propTypes = {
  //requestRefresh: React.PropTypes.bool.isRequired,
  //onComponentRefresh: React.PropTypes.func.isRequired
}


class ColorItem extends React.Component {
  render () {
    const { activity } = this.props
    return (
      <div className='item color' style={{ backgroundColor: activity.color }}>
          <p>{activity.color} - {activity.tags.join(',')}</p>
      </div>
    )
  }
}
ColorItem.propTypes = {
  //activity: React.PropTypes.object.isRequired
}

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  handleInput (e) {
    this.setState({
      searchText: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  render () {
    let searchInputClasses = ['searchInput']

    if (this.props.searchVisible) {
      searchInputClasses.push('active')
    }
    return (
        <input
          type='text'
          value={this.state.searchText}
          className={searchInputClasses.join(' ')}
          onChange={(e) => this.handleInput(e)}
          placeholder="Color's name, tags" />
    )
  }
}
SearchForm.propTypes = {
  //searchVisible: React.PropTypes.bool,
  //onSubmit: React.PropTypes.func.isRequired
}
SearchForm.defaultProps = {
  searchVisible: false,
  onChange: () => { }
}

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchVisible: false
    }
  }
  handleChange (val) {
    this.props.onChange(val)
  }
  render () {
    return (
      <div className='header'>
        <SearchForm searchVisible={this.state.searchVisible} onChange={(val) => this.handleChange(val)} />
      </div>
    )
  }
}
Header.defaultProps = {
  onChange: () => { }
}
Header.propTypes = {
  //onSearch: React.PropTypes.func
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Panel />
      </div>
    )
  }
}
//var mount = document.querySelector('#app')
//ReactDOM.render(<App />, mount)

/*
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }
}
*/
// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);