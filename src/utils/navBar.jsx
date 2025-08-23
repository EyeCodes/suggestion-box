import { Link } from "react-router-dom";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useState } from "react";
function NavBar(){

  const [boxName, setBoxName] = useState('');
  const searchBox = ()=> {
  }

  return (
    <nav className=" w-fit flex flex-row justify-evenly gap-2">
          <div className="links flex justify-center items-center">
      <Link to='/create'>
            <h1 className="font-bold text-center">CREATE</h1>
      </Link>
          </div>
          <div className="links flex items-center">
            <Link to='/my-box'>
            <h1 className="font-bold text-center">MY BOX</h1>
            </Link>
          </div>

          <div className="h-fit w-fit absolute flex justify-center items-center top-2  gap-2 left-100 z-99">
            <input type="text" placeholder="Search for Suggestion Box" value={boxName} onChange={e => setBoxName(e.target.value)} className="bg-white w-100 p-4 rounded-2xl" />
              <Link to={`box/${boxName}`}>
            <button onClick={searchBox}> 
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
              </Link>
          </div>
    </nav>
  )
}

export default NavBar;