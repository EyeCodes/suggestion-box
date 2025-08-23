import NavBar from "../utils/navBar";

function Header(){
  return (
    <header className='h-fit w-full p-5 bg-blue-400 top-0 flex flex-row justify-between relative overflow-hidden  '>
      <h1 className='text-white text-2xl font-bold'>SUGGESTION BOX</h1>
      <NavBar/>
    </header>
  )
}

export default Header;