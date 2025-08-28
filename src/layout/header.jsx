import Searchbar from "../component/searchbar";
import NavLinks from "../component/navLinks";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Header(){

  const [menu, setMenu] = useState(false)
  const [hideLinks, setHideLinks] = useState(false)

  const checkScreenSize = ()=>{
      
      if(window.innerWidth < 800){ 
        setMenu(true)
        setHideLinks(true)
      }
      else {
        setMenu(false) 
        setHideLinks(false)
      }
    }

  useEffect(()=> {
    
    checkScreenSize()
    
    window.addEventListener('resize', checkScreenSize)
    return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);

  return (
    <header className='h-fit w-full p-5 bg-blue-400 flex flex-row justify-between absolute top-0 overflow-hidden z-99 '>

          <NavLinks linkTitle={'Suggestion Box'} routeName={''} styleCss ={'text-xl'} />

        <nav className="w-full flex sm:flex-col md:flex-row flex-nowrap justify-evenly items-center gap-2">
        
        <div className="w-full flex sm:justify-evenly md:justify-center items-center">
          <Searchbar placeholder='Search for Suggestion Box' />
          {menu ? <Bars3BottomRightIcon className="h-10 w-10 text-white" onClick={()=>setHideLinks(prev => !prev)} /> : ''}
        </div>
        
          {hideLinks ? '' : <div className="w-100 md:w-[20%] flex sm:gap-5 md:gap-2 justify-end float-end">
              <NavLinks linkTitle={'Create'} routeName={'create'} />
              <NavLinks linkTitle={'My Box'} routeName={'my-box/search'} />
              </div>}

        </nav>
    </header>
  )
}

export default Header;