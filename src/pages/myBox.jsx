import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./box";
import PageEmpty from "../layout/emptyPage";
import FetchLetters from "../utils/fetchLetters";
// import Letter from "../layout/letterModal";

function MyBox(){
  const location = useLocation();
  const [boxAnimation] = useState('box');
  const [letterId, setLetterId] = useState('')
  const [expandLetter, setExpandLetter] = useState(false)

  const expandLetterStyle = {
    height: expandLetter ? `60%` :  `20%`,
    width: expandLetter ? `90%` :  `10em`,
    userSelect: expandLetter ? 'text' : 'none',
    transition: 'height 0.3s, width 0.3s',
  }

  const toggle = (e) => {

  setExpandLetter(prev=>!prev)
  const target = e.currentTarget

    setLetterId(target.id)
    console.log(letterId, target.id)

      setTimeout(()=>{
      if(target){
        target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      }
      }, 300)
  }


  const boxData = location.state?.boxData
  if(boxData == null) return <PageEmpty message={`419 \n PAGE EXPIRED`} />

  const {letter, loading} = FetchLetters(boxData.boxName)


    return (
      <div className="myBox h-full w-full flex md:flex-row sm:flex-col-reverse items-center">
          {boxData ? (
          <Box setAnimation={boxAnimation} color={boxData.boxColor} logo={boxData.boxLogo} title={boxData.boxTitle}  />
        ) : (
          <PageEmpty message={`SUGGESTION "${boxData.boxName}" DOES NOT EXIST`} />
        )}

        <div className="h-[80dvh] w-[90%] m-4 bg-none border border-[#84c8ff] rounded-3xl z-9">
          {loading ? (<div className="h-full w-full flex justify-center items-center"> 
              <h1 className="text-[#84c8ff]">Loading...</h1>
            </div>): letter ? (<div className="letterCont h-full w-full p-4 overflow-scroll flex flex-wrap gap-2 justify-center" >
              {letter.map(e=>{
                return (
                  <div onClick={toggle} id={e.letter.name} style={expandLetterStyle} className={`${letterId === e.letter.name ? 'bg-[#84c8ff]' : 'bg-white'} hover:bg-[#84c8ff] p-4 rounded-xl  overflow-hidden relative transition-colors duration-200 ease-in-out`} >
                    <div className=" h-full w-full flex flex-col gap-2">
                      <div className="h-fit w-full overflow-ellipsis">
                        <h1 className="text-[#19181b] text-[90%]" >Name: {e.letter.name}</h1>
                        <h1 className="text-[#19181b] text-[90%]" >Type: {e.letter.type}</h1>
                      </div>
                      {expandLetter ? (<div className="h-full w-full flex flex-col"> 
                                        <textarea name="" id="" className="h-full w-full resize-none text-[90%] p-2 text-sm bg-[#19181b]">
                                          {e.letter.contet}
                                        </textarea>

                                      </div>) : ''}
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