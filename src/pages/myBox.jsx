import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "./box";

function MyBox(){
  const [boxAnimation] = useState('box');
  const [boxName, setBoxName] = useState('');
  const [password, setBoxCode] = useState('');
  const { box } = useParams();
  
 

  if(!box){
    return (
    <div className="w-fit h-fit bg-white p-4 flex flex-col gap-4">
      <h1 className="font-bold">MY SUGGESTION BOX</h1>
      <input type="text" name="" id="" placeholder="Box Name" value={boxName} onChange={e => setBoxName(e.target.value)} className="p-2" />
      <input type="text" name="" id="" placeholder="Password" value={password} onChange={e => setBoxCode(e.target.value)}  className="p-2" />
      <Link to={`/my-box/${boxName}`}>
        <button>GO</button>
      </Link>
    </div>
  )
  }
  else if(box){
    return (
      <div className="h-full w-full grid grid-cols-2">
        <Box setAnimation={boxAnimation}/>
      </div>
    )
  }

}

export default MyBox;