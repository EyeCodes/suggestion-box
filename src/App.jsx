import './App.css'
import Form from './pages/form';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header className='h-fit w-full p-4 bg-blue-400  top-0'>
        <h1 className='text-white text-2xl font-bold'>SUGGESTION BOX</h1>
      </header>
      <div className='h-[100vh] w-full relative  '>

      <Form />
      </div>  

      
    </>
  )
}

export default App
