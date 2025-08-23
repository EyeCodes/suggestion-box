import './App.css'
import Form from './pages/form';
import Header from './layout/header';
import CreateBox from './pages/createBox';
import MyBox from './pages/myBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router basename="/suggestion-box">
      <>
        <Header/>
        <div className='h-[100dvh] w-full relative  '>
        <div className='h-full w-full flex justify-center items-center'>
          <Routes>
            <Route path='/create' element={<CreateBox />}/>
            <Route path='/my-box/:box?' element={<MyBox />}/>
            <Route path='/box/:box?' element={<Form />}/>
          </Routes>
        </div>
        </div>  
      </>
    </Router>
  )
}

export default App
