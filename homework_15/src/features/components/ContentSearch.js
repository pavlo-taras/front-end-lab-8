import React from 'react';
import ColorList from './ColorList';

//import Header from './HeaderSearch';
//import ActivityItem from './components/Timeline/GithubActivityItem';

const data = require('./data.json');

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // <~ set loading to false
      activities: data,
      filtered: data
    };
  }

  componentDidMount() {
    this.updateData();
  }
  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({loading: true}, this.updateData);
    }
  }
/*
  handleSearch(value) {
    if (value === '') {
      console.log("value empty")
      this.setState({
        filtered: this.state.activities
      });
    } else {
      console.log("value not empty")
      const {activities} = this.state;
      console.log("activities = ", activities)
      const filtered = activities.filter(
        element => element.color && element.color.match(new RegExp(value))
      );
      console.log("value = ",value,  filtered)
      this.setState({
        filtered
      });
    }
  };
*/
  // Call out to github and refresh directory
  updateData() {
    this.setState(
      {
        loading: false,
        activities: data
      },
      this.props.onComponentRefresh
    );
/*
    fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
        .then( (response) => {
            return response.json() })   
                .then( (json) => {
                    this.setState({colors: json});
                });  
                */
  }

  render() {
    const {loading, filtered} = this.state;
    
console.log("state = ", this.state)

    //
    //<div className="content">
//          <div className="line" />
//          {/* Show loading message if loading */}
//          {loading && <div>Loading</div>}
//          {/* Timeline item */}
//          {filtered.map(activity => (
//            <ActivityItem key={activity.id} activity={activity} />
//          ))}
//        </div>


        //<Header onSubmit={this.handleSearch} title="Github activity" />

    return (
      <div>
        <ColorList colors={this.state.filtered} />
      </div>
    );
  }
}

export default Panel;
