import NavBar from "../utils/navBar";

function Header(){
  return (
    <header className='h-[5em] w-full p-5 bg-blue-400 flex flex-row justify-between absolute top-0 overflow-hidden z-99 '>
      <h1 className='text-white sm:text-[1rem] text-center md:text-2xl font-bold'>SUGGESTION BOX</h1>
      <NavBar/>
    </header>
  )
}

export default Header;