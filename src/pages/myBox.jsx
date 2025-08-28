import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./box";
import PageEmpty from "../layout/emptyPage";
import FetchLetters from "../utils/fetchLetters";
// import Letter from "../layout/letterModal";

function MyBox(){
  const location = useLocation();
  const [boxAnimation] = useState('box');
  const [expanLetter, setExpandLetter] = useState({height:'', width: ''})

  const openLetter = (content) => {
        
  }

  const boxData = location.state?.boxData
  if(boxData == null) return <PageEmpty message={`419 \n PAGE EXPIRED`} />

  const {letter, loading} = FetchLetters(boxData.boxName)


    return (
      <div className="myBox h-full w-full flex md:flex-row sm:flex-col-reverse">
          {boxData ? (
          <Box setAnimation={boxAnimation} color={boxData.boxColor} logo={boxData.boxLogo} title={boxData.boxTitle}  />
        ) : (
          <PageEmpty message={`SUGGESTION "${boxData.boxName}" DOES NOT EXIST`} />
        )}

        <div className="h-[85dvh] w-[95%] m-4 bg-none border border-[#84c8ff] z-9">
          {loading ? (<div className="h-full w-full flex justify-center items-center"> 
              Loading...
            </div>): letter ? (<div className="letterCont h-full w-full p-4 overflow-scroll flex flex-wrap gap-2 justify-center" >
              {letter.map(ev=>{
                return (
                  <div onClick={e => openLetter(e)} className="h-30 w-[14em] bg-white hover:bg-[#84c8ff] p-4 rounded-xl overflow-hidden relative transition-colors duration-200 ease-in-out" >
                    <div className="h-full w-full flex flex-col absolute z-10">
                      <div className="h-fit w-full overflow-ellipsis">
                        <h1 className="text-black" >Name: {ev.letter.name}</h1>
                        <h1 className="text-black" >Type: {ev.letter.type}</h1>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>) : (<div className="h-full flex align-middle items-center justify-center">
              <PageEmpty message='NO LETTER YET...'/>
            </div>)}
        </div>


      </div>
    )

}

export default MyBox;