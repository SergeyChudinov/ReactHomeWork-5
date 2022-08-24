import './App.css';
// import Count from './Count';
import { messageGetSelector } from './redux/reducers/messageSelector';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';


function App() {
  const messages = useSelector(messageGetSelector)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const deleteMessage = (i) => {
    dispatch({type: 'delete_message', playload: i})
  }
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => dispatch({type: 'add_message', playload: input})}>Добавить сообщение</button>
      {messages.map((message, i) => {
        return (
          <div style={{ display: 'flex', width: 200, justifyContent: 'space-between'}} key={message.id}>
            <h4 style={{width: 100}}>{message.title}</h4>
            <button onClick={() => deleteMessage(i)}>x</button>
          </div>
        )
      })}
    </div>
  );
    
    
   
}

export default App;
