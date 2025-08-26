import { useState } from "react";
import addBox from "../component/createBox";
import Box from "./box"
import { useNavigate } from "react-router-dom";

function CreateBox(){
    const [boxAnimation] = useState('box');
    const [boxName, setBoxName] = useState('');
    const [boxCode, setBoxCode] = useState('');
    const [boxColor, setBoxColor] = useState('default');
    const [boxTitle, setBoxTitle] = useState('');
    const [boxLogo, setBoxLogo] = useState('');
    const [boxDescription, setBoxDescription] = useState('');

    const naviagate = useNavigate()

  const color = ['default', 'red', 'green', 'blue']
  
  const createBox = ()=> {

    if(!boxName || !boxCode){
      return alert('All required field must be filled')
    }
    setBoxName('')
    setBoxCode('')
    setBoxLogo('')
    setBoxTitle('')
    setBoxColor('default')
    setBoxDescription('')
    addBox({boxName: boxName, boxCode: boxCode, boxColor: boxColor, boxLogo: boxLogo, boxTitle: boxTitle, boxDescription: boxDescription})
    alert(`Suggestion Box ${boxName} successfully Created`)
    naviagate('/my-box/search')
  }

  return (
    <div className="createBox h-full w-full grid grid-cols-2">
      <Box setAnimation={boxAnimation} color={boxColor} logo={boxLogo} title={boxTitle}/>
      <div className="createBoxForm h-full w-full bg-white p-4 flex flex-col gap-2 z-2">
        <h1>CREATE SUGGESTION BOX</h1>

          <div className="flex flex-col">
            <label htmlFor="name"> Name <span className="text-red-500">*</span></label>
            <input type="text" name="name" id="" placeholder="Box Name" value={boxName} onChange={e => setBoxName(e.target.value)} className="p-2" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="boxCode"> Box Password <span className="text-red-500">*</span></label>
          <input type="password" name="boxcode" id="" placeholder="Password" value={boxCode} onChange={e => setBoxCode(e.target.value)}  className="p-2" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="title"> Title <span>(OPTIONAL)</span></label>
          <input type="text" name="title" id="" placeholder="Title (Optional)" value={boxTitle} onChange={e => setBoxTitle(e.target.value)} disabled={boxLogo}  className="p-2" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="logo"> Logo <span>(OPTIONAL)</span></label>
          <input type="url" name="logo" id="" placeholder="Image Link (Optional)" value={boxLogo} onChange={e => setBoxLogo(e.target.value)} disabled={boxTitle}  className="p-2" />
          </div>

          <div className="flex flex-col">
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
          <button onClick={createBox} className="h-fit w-full py-2 bg-blue-400 hover:bg-blue-500 rounded-2xl">CREATE</button>
      </div>

    </div>
  )

}

export default CreateBox