import './chats.css';
// import Count from './Count';
import { chatGetSelector } from '../redux/reducers/messageReducer/messageSelector';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

import {Link} from 'react-router-dom';

// export const messageGetSelector = state => state.messages

function Chats() {
  const chats = useSelector(chatGetSelector)
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const deleteChat = (i) => {
    dispatch({type: 'delete_chat', playload: i, meta: {
      delay: 1500
    }})
  }
  const addChat = () => {
    const newChat = {
      id: Math.floor(Math.random() * (1000000)),
      name: name
    }
    dispatch({type: 'add_chat', playload: newChat, meta: {
      delay: 1500
    }})
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => addChat()}>Добавить сообщение</button>
      {chats.map(({id, name}, i) => {
        return (
          <div style={{ display: 'flex', width: 200, justifyContent: 'space-between'}} key={id}>
            <Link className='Link' to={`/messages/${id}`} >
                {name}
            </Link>
            <button onClick={() => deleteChat(i)}>x</button>
          </div>
        )
      })}
    </div>
  );   
}

export default Chats;

//    <Link className='Link' to={'/message'} >