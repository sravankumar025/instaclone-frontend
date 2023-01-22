import './App.css';
import Postview from './postview';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './landing';
import PostForm from './postform';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="postview"  element={<Postview/>}/>
        <Route path="postform" element={<PostForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;