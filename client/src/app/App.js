import React, { Component } from 'react';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';
// import Layout from '../components/Layout';


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
      <React.Fragment>
      <GetRandomMovie />
      </React.Fragment>
    );
  }
}

export default App;
