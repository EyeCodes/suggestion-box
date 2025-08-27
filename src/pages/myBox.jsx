import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./box";
import PageEmpty from "../layout/emptyPage";
import FetchLetters from "../component/fetchLetters";
import Letter from "../layout/letterModal";

function MyBox(){
  const location = useLocation();
  const [boxAnimation] = useState('box');
  const test = (content) => {
    console.log(content.letter.content)
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

        <div className="h-full w-full bg-white z-9">
          {loading ? (<div className="h-full w-full flex justify-center items-center"> 
              Loading...
            </div>): letter ? (<div className="letterCont h-full w-full p-4 overflow-scroll flex flex-wrap gap-4 justify-center" >
              {letter.map(ev=>{
                return (
                  <div onClick={() => test(ev)} className="h-[7.5em] w-[14em] bg-blue-400 p-4 border rounded-xl overflow-hidden relative" >
                    <div className="h-[10em] w-[92%] bg-white transform self-center left-[4.5%] -top-13 border rounded-xl absolute"></div>
                    {/* <div className="h-[10em] w-[100%] bg-[#ffffff] transform rotate-45 left-[20%] -top-25 border absolute"></div> */}
                    <div className="absolute z-10">
                      <h1 className="text-black" >Name: {ev.letter.name}</h1>
                      <h1 className="text-black" >Type: {ev.letter.type}</h1>
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