    import React, { useState } from 'react';
    
function Form() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked); // event.target.checked gives the boolean truth value
        console.log(event.target.checked);
      };
  return (
    <div className="h-fit w-100 opacity-95 absolute bg-white p-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[55%] shadow-2xl transform z-99 letter">
      <form action="" className="h-full w-full relative transform-3d perspective-distant overflow-auto">
        
        <div className='flex flex-col bg-white'>

          <div className='formField'>
            <label htmlFor="name">Name</label>
          <input type="text" placeholder={isChecked ? 'Anonymous' : 'Name'} disabled={isChecked}/>
            <div className='flex gap-2'>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /><span>Anonymous</span>
          </div>

          </div>
    <hr />
          <div className='formField'>
            <label htmlFor="type">Type</label>
            <select name="" id="" className='p-2 border-1'>
              <option value="Suggestion">Suggestion</option>
              <option value="Complain">Complain</option>
            </select>
          </div>
    <hr />
        </div>

      <div className='bg-white'>
          <div className='formField pt-4'>
            <label htmlFor=""> Content </label>
          <div className='p-2 border'>
            <textarea name="" id="" className=' h-[10em]  w-full resize-none p-4 overflow-y-scroll focus:outline-0'></textarea>
          </div>
        </div>

        <hr />

        <div className='formField '>
          <h2 className='text-center'><span className='text-red-500 font-bold'>Warning:</span> Once Submitted It Cannot be Undone</h2>
          <button type="submit" className='w-fit p-2 self-center rounded-2xl text-white font-bold bg-blue-400'>Submit</button>
        </div>
      </div>

      </form>
    </div>
  )

} 

export default Form;