import React from 'react';


const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}> My name is {props.brap} </p>
      <h5> {props.children} </h5>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
}

export default person;
