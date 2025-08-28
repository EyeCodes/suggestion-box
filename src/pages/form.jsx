import React, { useEffect, useRef, useState } from 'react';
import sendLetter from '../utils/addLetter';
import Box from './box';
import { SendReport } from '../utils/bugReport';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

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
    const [letterAnimation, setLetterAnimation] = useState('');
    const [boxAnimation, setBoxAnimation] = useState('box');
    const [report, setReport] = useState(false)

    const about = useRef(null)
    const [isClicked, setIsClicked] = useState(false);
    
    const boxData = box.box;

    const stringLength = (e) => {
    if(e.target.value.length <= 60 ){
      const cleanText = e.target.value.replace(/\s+/g, ' ').trimStart()
      setName(cleanText.toUpperCase())
    }
  }

    const openInfo = () => {
      if(isClicked) setIsClicked(false)
      else setIsClicked(true)
    }

    useEffect(()=>{
        setName(''), setType('suggestion'), setContent(''), setIsChecked(false)
        if(boxData.boxName == 'report-bugs'){
          setReport(true)
        }
        else{
          setReport(false)
        }
    }, [boxData.boxName])

    const storeLetter = () =>{

      if(userName == '' || content == ''){
        return alert('All required field must be filled');
      }

      if(report) SendReport({ title: userName.trimEnd(),type: type, about: content, box: boxData.boxName})
      else sendLetter({ name: userName,type: type, content: content, box: boxData.boxName})

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

      <div className={`${letterAnimation} letterForm sm:h-[80%] md:h-fit w-150 py-[1em] rounded-md opacity-70 absolute bg-white sm:top-[50%] xl:top-[60%] left-[50%] -translate-x-[50%] -translate-y-[55%] shadow-2xl transform-z-99`}>
        
      <div className={` h-full w-full relative transform-3d perspective-distant overflow-auto`}>
        <div className='flex flex-col bg-white'>

        <div className='w-full relative flex justify-between'>
          <h1 className='w-fit px-[.7em] text-[1.5em] overflow-hidden text-nowrap font-bold capitalize'>{boxData.boxName}</h1>

            <h1 className={`${isClicked ? 'openInfo' : ''} w-0 absolute text-[1px] font-medium shadow-md shadow-black right-6 transition-all duration-500 ease-in-out bg-blue-400 text-white rounded-lg rounded-tr-none top-2 self-center`}>{boxData.boxDescription ?  boxData.boxDescription : 'No Description Was Provided' }</h1>

            <QuestionMarkCircleIcon ref={about} onClick={openInfo} className='h-[2em] w-[2em] mx-[1em] font-bold bg-white rounded-full hover:text-blue-500 transition-colors duration-200 ease-in-out z-2' />

        </div>
        
          <div className='formField'>
            <label htmlFor="name">{report ? 'Title' : 'Name'}</label>
              <input type="text" id='name' value={userName.trimStart()} onChange={stringLength} placeholder={report ? 'Title' : 'Name'} disabled={isChecked}/>
            <div className='flex gap-2'>
            {report ? '' : (<><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /><span>Anonymous</span></>) }
          </div>

          </div>
    <hr />
          <div className='formField'>
            <label htmlFor="type">Type</label>
            <select name="type" id="type" value={type} onChange={e => setType(e.target.value)} defaultValue={'suggestion'} className='p-2 border-1'>
              <option value="suggestion">Suggestion</option>
              <option value="complain">Complain</option>
            </select>
          </div>
    <hr />
        </div>

      <div className='bg-white'>
          <div className='formField pt-4'>
            <label htmlFor="content"> Content </label>
          <div className='p-2 border rounded-md'>
            <textarea name="content" id="content" value={content} onChange={e => setContent(e.target.value)} className=' h-[5em]  w-full resize-none p-4 overflow-y-scroll focus:outline-0'></textarea>
          </div>
        </div>

        <div className='flex flex-col gap-2 justify-center'>
          <h2 className='text-center'><span className='text-red-500 font-bold'>Warning:</span> Once Submitted It Cannot be Undone</h2>
          <button type="submit" onClick={storeLetter} className='w-fit p-2 self-center rounded-xl text-white font-bold bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out'>
            {report ? "REPORT" : "SUBMIT"}
          </button>
        </div>
      </div>

      </div>
    </div>

    </>

  )
} 

export default Form;