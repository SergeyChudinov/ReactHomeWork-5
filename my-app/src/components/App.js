import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Chats from './chats';
import Message from './message';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Chats/>}/>
        <Route path='/messages/:id' element={<Message/>}/>   
      </Routes>
    </Router>
  )
    
   
}

export default App;


// <Route path='/message' element={<Message/>}/>  