import React from 'react';
import './App.css';
import SignIn from './SignIn';
import Home from './Home';
import Register from './Register';
import Navigation from './Navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'sign in'
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/')
      .then(resp => resp.json())
      .then(console.log)
  }

  onRouteChange = (route) => {
    // if (route === 'sign out') {

    // } else if (route === 'home') {
    //   this.setState({ route : ''})
    // }
    this.setState({ route: route });
  }

  render() {
    return (
      this.state.route === 'sign in'
        ? <div><SignIn onRouteChange={this.onRouteChange} /></div>
        : (this.state.route === 'register')
          ? <div><Register onRouteChange={this.onRouteChange} /></div>
          : <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Home onRouteChange={this.onRouteChange} />
          </div>
    );

  }
}

export default App;
