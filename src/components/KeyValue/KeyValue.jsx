import styles from './KeyValue.scss';
import React from 'react';

const initialState = {
  key: '',
  value: '',
}

class KeyValue extends React.Component {
  constructor(props){
    super(props);

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]:value})
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <React.Fragment>
        <form>
          <input
            type = 'text'
            name = 'key'
            onChange = {this.handleChange}
            placeholder = 'key'
            value = {this.state.key}
            />

          <input
            type = 'text'
            name = 'value'
            onChange = {this.handleChange}
            placeholder = 'value'
            value = {this.state.value}
          />

          <button onClick={this.handleSubmit}> Submit </button>
        </form>
      </React.Fragment>
    )
  }
}

export default KeyValue;