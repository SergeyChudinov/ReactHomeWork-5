import './App.css';
// import Count from './Count';
import { messageGetSelector } from './redux/reducers/messageReducer/messageSelector';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

// export const messageGetSelector = state => state.messages

function App() {
  // const messages = useSelector(messageGetSelector)
  const chats = useSelector(messageGetSelector)
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const deleteChat = (i) => {
    dispatch({type: 'delete_chat', playload: i})
  }
  const addChat = () => {
    const newChat = {
      id: Math.floor(Math.random() * (1000000)),
      name: name
    }
    dispatch({type: 'add_chat', playload: newChat})
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => addChat()}>Добавить сообщение</button>
      {chats.map(({id, name}, i) => {
        return (
          <div style={{ display: 'flex', width: 200, justifyContent: 'space-between'}} key={id}>
            <h4 style={{width: 100}}>{name}</h4>
            <button onClick={() => deleteChat(i)}>x</button>
          </div>
        )
      })}
    </div>
  );
    
    
   
}

export default App;
