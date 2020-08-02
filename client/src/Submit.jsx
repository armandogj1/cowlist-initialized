import React from 'react';


class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      showDiv: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitCow = this.submitCow.bind(this);
    this.showDiv = this.showDiv.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitCow(event) {
    this.props.handleCowPost({
      name: this.state.name,
      description: this.state.description
    });
    this.setState({name:'', description:''});
  };

  showDiv() {
    this.setState({showDiv: !this.state.showDiv});
  }

  render() {
    return (
      <div>
        <div >
          <button onClick={this.showDiv}>Render</button>
        </div>
        {
          this.state.showDiv ?
          <div className='submit'>
            <input name='name' value={this.state.name} onChange={this.handleChange}></input>
            <input name='description' value={this.state.description} onChange={this.handleChange}></input>
            <button onClick={this.submitCow}>Save</button>
          </div>
          : null
        }
      </div>
    );
  }
}
export default Submit;