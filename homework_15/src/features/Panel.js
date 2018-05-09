import React from 'react';
import Header from './Header'
import Content from './Content'


class Panel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      activities: [],
      selects: [],
      availables: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.moveColor = this.moveColor.bind(this);
    this.returnColor = this.returnColor.bind(this);
  }

  componentDidMount() {
      this.setState({ loading: true });

      fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
        .then(data => data.json())
        .then(data => {
          this.setState({
            activities: data
          })
          this.selectData();
          this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error)
      })

      document.querySelector('input').focus()
  }

  handleSearch (event) {
    this.setState({
      searchValue: event.target.value
    }, () => { this.selectData() })
  }

  moveColor (color) {
    const { activities, availables } = this.state

    this.setState({
      activities: activities.filter(activity => activity.color != color),
      availables: availables.concat(activities.filter(activity => activity.color == color))
    }, () => { this.selectData() })
  }

  returnColor (color) {
    const { activities, availables } = this.state

    this.setState({
      activities: activities.concat(availables.filter(availabled => availabled.color == color)),
      availables: availables.filter(availabled => availabled.color != color)
    }, () => { this.selectData() })
  }

  selectData () {
    let selects = {}
    const { activities, searchValue } = this.state

    selects = activities.filter(
      activity => {
        return (new RegExp(searchValue)).test(activity.color) || activity.tags.some(tag => (new RegExp(searchValue)).test(tag))
      }
    ).sort((a, b) => a.id - b.id)

    this.setState({ selects: selects })
  }

  render () {
    return (
      <div className='panel'>
        <Header
          handleSearch={this.handleSearch}
          cntSelects={this.state.selects.length}
          availables={this.state.availables}
          returnColor={this.returnColor}
        />
        <Content
          selects={this.state.selects}
          cntSelects={this.state.selects.length}
          disabledAddButton={this.state.availables.length >= 10}
          moveColor={this.moveColor}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default Panel;
