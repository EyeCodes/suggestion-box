import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./box";
import PageEmpty from "../layout/emptyPage";
import FetchLetters from "../component/fetchLetters";
// import {FetchMyBox} from "../component/fetchMyBox";

function MyBox(){
  const location = useLocation();

  const boxData = location.state?.boxData
  const {letter, loading, error} = FetchLetters(boxData.boxName)
  const [boxAnimation] = useState('box');
    return (
      <div className="h-full w-full flex md:flex-row sm:flex-col-reverse">
          {boxData ? (
          <Box setAnimation={boxAnimation} color={boxData.boxColor} logo={boxData.boxLogo} title={boxData.boxTitle}  />
        ) : (
          <PageEmpty message={`SUGGESTION "${boxData.boxName}" DOES NOT EXIST`} />
        )}

        <div className="h-full w-full bg-white z-9">
          {loading ? (<div className="h-full w-full flex justify-center items-center"> 
              Loading...
            </div>): letter ? (<div className="h-full w-full p-4 overflow-scroll flex gap-4" >
              {letter.map(e=>{
                return (
                  <div className="h-[7.5em] w-[15em] bg-blue-400 p-4 border rounded-xl overflow-hidden relative" >
                    <div className="h-[10em] w-[92%] bg-white transform self-center left-[4.5%] -top-13 border rounded-xl absolute"></div>
                    {/* <div className="h-[10em] w-[100%] bg-[#ffffff] transform rotate-45 left-[20%] -top-25 border absolute"></div> */}
                    <div className="absolute z-10">
                      <h1 className="text-black" >Name: {e.letter.name}</h1>
                      <h1 className="text-black" >Type: {e.letter.type}</h1>
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