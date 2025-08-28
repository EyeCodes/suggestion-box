
import { useState } from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom";

function Searchbar({placeholder}){

    const navigate = useNavigate()

    const [boxName, setBoxName] = useState('');
    const [message, setMessage] = useState('');

    const searchBox = ()=> {
      if(!boxName) {setMessage('Cant Be Empty')
        setBoxName('')
        setTimeout(()=>{
        setMessage('')
      },1000)}
      else{
        setBoxName('')
        navigate(`/box/${boxName}`)
      }
  
    }

    return (
      <div className="h-fit sm:w-[100%] px-4 flex justify-center items-center  gap-2 z-99">
        <input type="text" placeholder={message ? message : placeholder} value={boxName} disabled={message} onChange={e => setBoxName(e.target.value)} className={`bg-[#19181b] text-black w-100 p-4 rounded-2xl overflow-ellipsis`} />
        <button onClick={searchBox} disabled={message}> 
          <MagnifyingGlassIcon className="h-5 w-5 text-white font-bold" />
        </button>
      </div>
    )

}

export default Searchbar