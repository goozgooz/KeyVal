import React from 'react';
import KeyValue from '../KeyValue';

const KeyValueDisplay = (props) => {
  const {array, updateInput, removeInput} = props;
  
  const keyValues = array.map((item, i) => 
    <KeyValue
      data={item}
      updateInput={updateInput}
      removeInput={removeInput}
      key={i}
    />
  )
  
  return (
    <React.Fragment> {keyValues} </React.Fragment>
  )
}

export default KeyValueDisplay;