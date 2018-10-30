import React from 'react';
import styles from './KeyValue.scss';

class KeyValue extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      id: null,
      key: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  static getDerivedStateFromProps(props, state){
    if(props.data !== state){
      return {
        id: props.data.id,
        key: props.data.key,
        value: props.data.value,
      };
    } else {
      return null;
    }
  }
  
  handleChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
    
    this.props.updateInput({
      [name]: value,
      id: this.state.id,
    });
  }
  
  handleRemove(){
    this.props.removeInput(this.state.id);
  }

  render(){
    return(
      <div className={styles.keyValInput}>
        <form>
          <input
            type='text'
            name='key'
            placeholder='Key'
            onChange={this.handleChange}
            value={this.state.key}
          />
          
          <input
            type='text'
            name='value'
            placeholder='Value'
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
        
        <button onClick={this.handleRemove}> X </button>
      </div>
    );
  }



};

export default KeyValue;