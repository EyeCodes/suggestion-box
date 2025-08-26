import { useNavigate } from "react-router-dom";
import NavBar from "../utils/navBar";

function Header(){

  const naviagate = useNavigate()

  const home = () =>{
    naviagate('/')
  }

  return (
    <header className='h-[5em] w-full p-5 bg-blue-400 flex flex-row justify-between absolute top-0 overflow-hidden z-99 '>
      <h1 className='text-white sm:text-[1rem] text-center md:text-[1.2rem] font-bold' onClick={home}>SUGGESTION BOX</h1>
      <NavBar/>
    </header>
  )
}

export default Header;