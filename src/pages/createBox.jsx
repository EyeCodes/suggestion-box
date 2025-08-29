import { useState } from "react";
import addBox from "../utils/createBox";
import Box from "./box"
import { useNavigate } from "react-router-dom";
import { ValidateBoxName } from "../utils/validateBoxName";

function CreateBox(){
    const [boxAnimation] = useState('box');
    const [boxName, setBoxName] = useState('');
    const [boxCode, setBoxCode] = useState('');
    const [boxColor, setBoxColor] = useState('default');
    const [boxTitle, setBoxTitle] = useState('');
    const [boxLogo, setBoxLogo] = useState('');
    const [boxDescription, setBoxDescription] = useState('');

    const {boxNameTaken, checking} = ValidateBoxName(boxName)


    const naviagate = useNavigate()

  const color = ['default', 'red', 'green', 'blue', 'white']

  const stringLength = (e) => {
    if(e.target.value.length <= 50 ){
      if(e.target.name != 'name') {setBoxTitle(e.target.value)}
      else {setBoxName(e.target.value)
    }}
  }
  
  const createBox = ()=> {

    if(!boxName || !boxCode){
      return alert('All required field must be filled')
    }
    if(boxNameTaken && boxName && boxCode) return alert('Name is already Taken')
    setBoxName('')
    setBoxCode('')
    setBoxLogo('')
    setBoxTitle('')
    setBoxColor('default')
    setBoxDescription('')
    addBox({boxName: boxName.trimEnd(), boxCode: boxCode, boxColor: boxColor, boxLogo: boxLogo, boxTitle: boxTitle, boxDescription: boxDescription})
    alert(`Suggestion Box ${boxName} successfully Created`)
    naviagate('/my-box/search')
  }

  return (
    <div className="createBox h-full w-full grid grid-cols-2 justify-center items-center">
      <Box setAnimation={boxAnimation} color={boxColor} logo={boxLogo} title={boxTitle}/>
      <div className="createBoxForm h-[80dvh] w-[95%] bg-none border border-[#84c8ff] rounded-3xl p-4 flex flex-col overflow-x-scroll gap-2 z-2">
        <h1 className="text-[#84c8ff] font-bold" >CREATE SUGGESTION BOX</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="name"> Name <span className="text-red-500">*</span></label>
            <input type="text" name="name" id="" placeholder="Box Name" value={boxName.trimStart()} onChange={stringLength} className="p-2" />
                  {boxName ? checking ? ( <h1 className="text-[#84c8ff]">Checking...</h1> ) : boxNameTaken ? <h1 className="text-[#ff2525]">Name Taken</h1> : <h1 className="text-[#1dff21]">Name Available</h1> : '' }
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="boxCode"> Box Password <span className="text-red-500">*</span></label>
          <input type="password" name="boxcode" id="" placeholder="Password" value={boxCode.trimStart().trimEnd()} onChange={e => setBoxCode(e.target.value)}  className="p-2" />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="title"> Title <span>(OPTIONAL)</span></label>
          <input type="text" name="title" id="" placeholder="Title (Optional)" value={boxTitle} onChange={stringLength} disabled={boxLogo}  className="p-2" />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="logo"> Logo <span>(OPTIONAL)</span></label>
          <input type="url" name="logo" id="" placeholder="Image Link (Optional)" value={boxLogo.trimStart()} onChange={e => setBoxLogo(e.target.value)} disabled={boxTitle}  className="p-2" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description"> Description <span>(OPTIONAL)</span></label>
            <textarea name="description" id="" value={boxDescription} onChange={e => setBoxDescription(e.target.value)} className="h-20 w-full resize-none p-4"></textarea>
          </div>

          <select name="" id="" defaultValue={boxColor} onChange={e => setBoxColor(e.target.value)} className="p-4">
            {
              color.map((e) => (
                <option value={e}>{e}</option>
              ))
            }
          </select>
          <button onClick={createBox} className="h-fit w-full py-2 bg-[#0b90fc] hover:bg-[#289bf9] hover:text-black rounded-2xl text-white">CREATE</button>
      </div>

    </div>
  )

}

export default CreateBox