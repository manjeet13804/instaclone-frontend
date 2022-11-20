import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './components/landing-page/landing-page';
import PostView from './components/post-view/post-view';
import Upload from './components/upload/upload';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/post-view' element={<PostView/>}/>
          <Route path='/upload' element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
