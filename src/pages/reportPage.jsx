import { FlagIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "react-router-dom"

function ReportButton(){

  const naviagate =useNavigate()

  const reportBox = () =>{
    naviagate(`/box/${'report-bugs'}`)
  }


  return (
    <div className="h-[5vw] w-[5vw] flex rounded-full absolute left-0 bottom-0 m-5 p-1 bg-black overflow-hidden" onClick={reportBox}>
      <div className="h-full w-full rounded-full flex justify-center items-center p-2 bg-red-600 hover:bg-[#fd1818] transition-colors duration-300 ease-in-out">
        <FlagIcon className="h-10 w-10 text-white hover:text-[#161616] transition-colors duration-300 ease-in-out"/>
      </div>
    </div>
  )

}

export default ReportButton