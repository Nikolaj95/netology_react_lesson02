import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";
import Toolbar from "./components/Toolbar";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {filters: 'All'};
  };

  render() {
    let getFilter = filter => {
      this.setState({filters: filter})
    };

    let returnProjects = (filter, proj) => {
      console.log(proj)
      if (filter === 'All') return proj;
      let newArr = proj.filter((pr) => pr.category === filter );
      return newArr;
    }

    return (
        <div>
          <Toolbar
              filters={this.props.filters}
              selected={this.state.filters}
              onSelectFilter={(filter) => getFilter(filter)} />
          <Portfolio projects={returnProjects(this.state.filters, this.props.projects)} />
        </div>
    );
  }
}

export default App;
