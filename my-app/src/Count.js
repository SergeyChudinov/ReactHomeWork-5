import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function Count() {
    const [input, setInput] = useState(null);
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
      <div>
            {count}<br></br>
            <button onClick={() => dispatch({type: 'plus'})}>+</button>
            <button onClick={() => dispatch({type: 'minus'})}>-</button><br></br>
            <button onClick={(e) => dispatch({type: 'custom', payload: e.target.textContent})}>1000</button><br></br>
            <input onChange={(e) => setInput(input => e.target.value)}></input>  
            <button onClick={(e) => dispatch({type: 'custom', payload: +input})}>custom</button>
      </div>
    );
  }
  
  export default Count;
  