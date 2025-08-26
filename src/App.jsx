import './App.css'
import Header from './layout/header';
import CreateBox from './pages/createBox';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FetchBox from './component/fetchBox';
import FetchMyBox from './component/fetchMyBox';
import MyBox from './pages/myBox';
import PageEmpty from './layout/emptyPage';
import HomePage from './pages/home';
import { useEffect, useState } from 'react';
import ReportButton from './pages/reportPage';

function App() {

  const [screenTooSmall, setScreenTooSmall] = useState(false)

useEffect(()=> {

  const checkScreenSize = ()=>{
  if(window.innerWidth < 280) setScreenTooSmall(true)
    else setScreenTooSmall(false)
  }

  window.addEventListener('resize', checkScreenSize)
  return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  return (

    <Router >
        {screenTooSmall ? ( 
      <>
          <PageEmpty message={`UNFORTUNATELY, SUGGESTION BOX IS NOT SUPPORTED FOR THIS SCREEN SIZE \n :(`} />
      </>
        ) : (
      <>
          <Header/>
        <div className='h-screen w-full relative pt-[5em] '>
        <div className='h-full w-full flex justify-center items-center'>
          <Routes>
            <Route path='/' element={<HomePage/>} /> 
            <Route path='/box/:box?' element={<FetchBox />}/>
            <Route path='/create' element={<CreateBox />}/>
            <Route path='/my-box/search' element={<FetchMyBox />}/>
            <Route path='/my-box/:box' element={<MyBox/>} />
            <Route path='/*' element={<PageEmpty message={`404 \n PAGE NOT FOUND`} />} />
          </Routes>
        </div>
        {/* <ReportButton /> */}
        </div>  
      </>    
        ) }
      
    </Router>
  )
}

export default App
