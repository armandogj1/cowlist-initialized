import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Cowlist from './cowlist.jsx';
import Submit from './Submit.jsx';
// import Cow from './Cow';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [
        {name: 'betsy', description: 'brown and blue'},
        {name: 'tina', description: 'red and white'},
        {name: 'gertrud', description: 'blonde and tan'}
      ],
      hero: {name: '', description: ''}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleDescription(name, description) {
    this.setState({
      hero: {name, description}
    })
  }

  handleSubmit({name, description}) {
    axios.post('/api/cows', {name , description})
      .then(() => {
        return axios.get('api/cows');
      })
      .then(results => this.setState({cows: results.data}))
      .catch(err => console.log(err));
  }

  // don't know why it doesn't work
  render() {
    return (
      <div>
        <h1>COWLIST</h1>
        {
          this.state.hero.name === '' ?
            null :
            <div>
              <p>{this.state.hero.name}</p>
              <p>{this.state.hero.description}</p>
            </div>
        }
        <Submit handleCowPost={this.handleSubmit}/>
        <Cowlist cows={this.state.cows} handleDescription={this.handleDescription}/>
      </div>
    );
  }
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);