import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

import { messageGetSelector } from '../redux/reducers/messageReducer/messageSelector';

import {Link} from 'react-router-dom';

import './message.css';

const Message = () => {
    const {id} = useParams();
    const message = useSelector(messageGetSelector);
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    let filtredMessage = message.filter(el => el.chatId === +id);

    const deleteMessage = (id) => {
        dispatch({type: 'delete_message', playload: id, meta: {
          delay: 1500
        }})
      }
    const addMessage = () => {
        const newMessage = {
          id: Math.floor(Math.random() * (1000000)),
          title: title,
          chatId: +id
        }
        dispatch({type: 'add_message', playload: newMessage, meta: {
          delay: 1500
        }})
    }
    console.log(filtredMessage)
    return (
        <>
            <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <button onClick={() => addMessage()}>Добавить сообщение</button>
            <div className="messageDiv">
                {filtredMessage.map(el => {
                    return (
                        <div key={el.id} style={{ display: 'flex', width: 200, justifyContent: 'space-between'}}>
                            <div >
                                {el.title}
                            </div>
                            <button onClick={() => deleteMessage(el.id)}>x</button>
                        </div>
                    )
                })}
            </div>
            <Link className='Link' to={`/`} >
                Вернуться на главную страницу
            </Link>
        </>
    )
}

export default Message;