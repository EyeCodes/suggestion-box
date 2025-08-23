
function Box({setAnimation}){
  console.log(setAnimation)
  return (
    <div className={`h-[20rem] w-[20rem]  relative bg-none transform-3d perspective-1000 rotate-y-15 -rotate-x-20 ${setAnimation}`}>

            <div className={`h-full w-full absolute bg-[#ede0d4] flex items-center -translate-z-[10rem] `}> 
              {/* back */}
            </div>

            <div className={`h-full w-full absolute bg-[#b08968] flex items-center translate-x-[10rem] rotate-y-90 `}> 
              {/* right */}
            </div>

            <div className={`h-full w-full absolute bg-[#7f5539] flex items-center -translate-x-[10rem] -rotate-y-90 `}> 
              {/* left */}
            </div>

            <div className={`h-full w-full absolute bg-[#ddb892] flex justify-center items-center -translate-y-[10rem] rotate-x-90 `}>
               {/*top  */}
                <div className='h-5 w-20 bg-black'></div>
            </div>
            <div className={`h-full w-full absolute bg-[#7f5539] flex items-center translate-y-[10rem] -rotate-x-90 `}> 
              {/* bottom */}
            </div>

            <div className={`h-full w-full absolute bg-[#b08968] flex items-center translate-z-[10rem] `}> 
              {/* front */}
            </div>

          </div>
  );

}

export default Box;