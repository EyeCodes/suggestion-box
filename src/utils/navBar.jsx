import { Link, useNavigate } from "react-router-dom";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useState } from "react";
function NavBar(){

  const naviagate = useNavigate()

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
      naviagate(`/box/${boxName}`)
    }

  }

  return (
    <nav className=" w-fit flex flex-row  grow-1 justify-evenly items-center gap-2">

      <div className="h-fit lg:w-fit sm:w-[20%] flex justify-center items-center  gap-2 z-99">
            <input type="text" placeholder={message ? message : 'Search for Suggestion Box'} value={boxName} disabled={message} onChange={e => setBoxName(e.target.value)} className={`bg-white w-100 p-4 rounded-2xl overflow-ellipsis`} />
            <button onClick={searchBox} disabled={message}> 
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

      <div className="flex gap-2 justify-end float-end">
            <div className="links flex justify-center items-center">
      <Link to='/create'>
            <h1 className="font-bold text-center">CREATE</h1>
      </Link>
          </div>
          <div className="links flex items-center">
            <Link to='/my-box/search'>
            <h1 className="font-bold text-center">MY BOX</h1>
            </Link>
          </div>
      </div>
    </nav>
  )
}

export default NavBar;