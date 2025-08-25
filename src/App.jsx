import './App.css'
import Header from './layout/header';
import CreateBox from './pages/createBox';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FetchBox from './component/fetchBox';
import FetchMyBox from './component/fetchMyBox';
import MyBox from './pages/myBox';

function App() {
  return (

    <Router >
      <>
        <Header/>
        <div className='h-screen w-full relative pt-[5em] '>
        <div className='h-full w-full flex justify-center items-center'>
          <Routes>
            <Route path='/box/:box?' element={<FetchBox />}/>
            <Route path='/create' element={<CreateBox />}/>
            <Route path='/my-box/search' element={<FetchMyBox />}/>
            <Route path='/my-box/:box' element={<MyBox/>} />
          </Routes>
        </div>
        </div>  
      </>
    </Router>
  )
}

export default App
