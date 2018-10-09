import React, { Component } from 'react';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';
// import FinalDisplay from '../container/pages/chosenMovieDisplay/FinalDisplay'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class App extends Component {
  state = {
    response: ''
  };  

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <Switch >
          <Route exact path='/' component={GetRandomMovie} />
          {/* <Route path='/result' component={FinalDisplay} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
