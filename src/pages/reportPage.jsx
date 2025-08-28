import { FlagIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "react-router-dom"

function ReportButton(){

  const naviagate =useNavigate()

  const reportBox = () =>{
    naviagate(`/box/${'report-bugs'}`)
  }


  return (
    <div className="h-[3em] w-[3em] flex rounded-full absolute left-0 bottom-0 m-[2%] overflow-hidden" onClick={reportBox}>
      <div className="h-full w-full rounded-full flex justify-center items-center p-2 bg-red-600 hover:bg-[#fd1818] transition-colors duration-300 ease-in-out">
        <FlagIcon className="h-4 w-4 text-white hover:text-[#161616] transition-colors duration-300 ease-in-out"/>
      </div>
    </div>
  )

}

export default ReportButton