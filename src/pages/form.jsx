import React, { useState } from 'react';
import sendLetter from '../component/addLetter';
import Box from './box';
import PageEmpty from '../layout/emptyPage';
import { Link } from "react-router-dom";
import FetchBox from '../component/fetchBox';

function Form(box) {

    // const rand = Math.floor(Math.random() * 5000) + 100
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked); 
        isChecked ?  setName('') : setName('Anonymous')

      };

    const [userName, setName] = useState('');
    const [type, setType] = useState('suggestion');
    const [content, setContent] = useState('');
    const [storeAnimation, setLetterAnimation] = useState('');
    const [boxAnimation, setBoxAnimation] = useState('box');
    
      const boxData = box.box;

    const storeLetter = () =>{

      if(userName == '' || content == ''){
        return alert('All required field must be filled');
      }

      sendLetter({ name: userName,type: type, content, box: boxData.boxName})
      setLetterAnimation('letter')
      setBoxAnimation('')

      setName(''), setType('suggestion'), setContent(''), setIsChecked(false)

      setTimeout(()=>{
      setBoxAnimation('box')
      setLetterAnimation('')
      }, 5000);
    }  
  return (
    
    <>
      <Box setAnimation={boxAnimation} color={boxData.boxColor} logo={boxData.boxLogo} title={boxData.boxTitle}  />

      <div className={`${storeAnimation} h-fit w-100 pt-[5em] opacity-95 absolute bg-white p-2 top-[55%] left-[50%] -translate-x-[50%] -translate-y-[55%] shadow-2xl transform-z-99`}>
      <div className={` h-full w-full relative transform-3d perspective-distant overflow-auto`}>
        
        <div className='flex flex-col bg-white'>

          <div className='formField'>
            <label htmlFor="name">Name</label>
          <input type="text" id='name' value={userName} onChange={e => setName(e.target.value)} placeholder='Name' disabled={isChecked}/>
            <div className='flex gap-2'>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /><span>Anonymous</span>
          </div>

          </div>
    <hr />
          <div className='formField'>
            <label htmlFor="type">Type</label>
            <select name="type" id="type" value={type} onChange={e => setType(e.target.value)} className='p-2 border-1'>
              <option value="suggestion" selected>Suggestion</option>
              <option value="complain">Complain</option>
            </select>
          </div>
    <hr />
        </div>

      <div className='bg-white'>
          <div className='formField pt-4'>
            <label htmlFor="content"> Content </label>
          <div className='p-2 border'>
            <textarea name="content" id="content" value={content} onChange={e => setContent(e.target.value)} className=' h-[10em]  w-full resize-none p-4 overflow-y-scroll focus:outline-0'></textarea>
          </div>
        </div>

        <hr />

        <div className='formField '>
          <h2 className='text-center'><span className='text-red-500 font-bold'>Warning:</span> Once Submitted It Cannot be Undone</h2>
          <button type="submit" onClick={storeLetter} className='w-fit p-2 self-center rounded-2xl text-white font-bold bg-blue-400'>Submit</button>
        </div>
      </div>

      </div>
    </div>
    </>

  )
} 

export default Form;