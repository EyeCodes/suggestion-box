import './App.css'
import Form from './pages/form';
import Header from './layout/header';
import CreateBox from './pages/createBox';
import MyBox from './pages/myBox';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FetchBox from './component/fetchBox';

function App() {
  return (

    <Router >
      <>
        <Header/>
        <div className='h-[100dvh] w-full relative  '>
        <div className='h-full w-full flex justify-center items-center'>
          <Routes>
            <Route path='/box/:box?' element={<FetchBox />}/>
            <Route path='/create' element={<CreateBox />}/>
            <Route path='/my-box/:box?' element={<MyBox />}/>
          </Routes>
        </div>
        </div>  
      </>
    </Router>
  )
}

export default App
