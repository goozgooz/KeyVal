import React from 'react';
import style from './KeyValueContainer.scss';
import KeyValueDisplay from '../KeyValueDisplay';

import uuid from 'uuid/v4';

const initialPair = {
  id: uuid(),
  key: '',
  value: '',
};

class KeyValueContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      keyValArray: [initialPair],
    };

    this.addInput = this.addInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  addInput(){
    const newPair = {
      id: uuid(),
      key: '',
      value: '',
    };
    
    this.setState(prevState => ({
      keyValArray: [...prevState.keyValArray, newPair],
    }));
  }
  
  updateInput(input){
    this.setState(({keyValArray}) => ({
      keyValArray: keyValArray.map(item => item.id === input.id ? {...item, ...input} : item),
    }));
  }
  
  removeInput(id){
    this.setState(({keyValArray}) => ({
      keyValArray: keyValArray.filter(item => item.id !== id),
    }));
  }
  
  handleSubmit(){
    this.state.keyValArray.map(item => {
      console.log(JSON.stringify({[item.key]: item.value}));
    });
  }
  
  render(){
    const {keyValArray} = this.state;

    return(
      <div className='container'>
        <h1> This is the Containter </h1>
        <div onClick={this.addInput}> + </div>
        
        <KeyValueDisplay 
          array={keyValArray}
          updateInput={this.updateInput}
          removeInput={this.removeInput}
        />
        
        <button onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
};

export default KeyValueContainer;