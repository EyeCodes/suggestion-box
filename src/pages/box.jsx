
function Box({setAnimation, title, logo, color}){

  const boxColor = 
    [{
      'default': {
        'front': 'b08f68',
        'left': '7f5539',
        'right': 'ad835f',
        'top': 'ddb892',
        'bottom': '7f5539',
        'back': 'b88254',
      },
      'red': {
        'front': 'e5383b',
        'left': 'a4161a',
        'right': 'bf2a2d',
        'top': 'd12427',
        'bottom': '8c0f12',
        'back': 'c1121f',
      },
      'green': {
        'front': '329603',
        'left': '308709',
        'right': '359908',
        'top': '42b50e',
        'bottom': '004b23',
        'back': '007200',
      },
      'blue': {
        'front': '0466c8',
        'left': '023e7d',
        'right': '0353a4',
        'top': '045eb8',
        'bottom': '001845',
        'back': '002855',
      }
  }]

  return (
  <div className='h-full w-full flex justify-center items-center'>
    <div className={`boxSize md:h-[20em] md:w-[20em] h-80 w-80 sm:scale-[1] lg:scale-[1] sm:translate-z-[calc(10vw)] relative bg-none transform-3d md:perspective-1000 sm:perspective-500 rotate-y-15 -rotate-x-20 ${setAnimation}`}>

            <div style={{ backgroundColor: `#`+boxColor[0][color]['back'] }} className={`h-full w-full absolute flex items-center -translate-z-[10rem] `}> 
              {/* back */}
            </div>

            <div style={{ backgroundColor: `#`+boxColor[0][color]['right'] }} className={`h-full w-full absolute flex items-center translate-x-[10rem] rotate-y-90 `}> 
              {/* right */}
            </div>

            <div style={{ backgroundColor: `#`+boxColor[0][color]['left'] }} className={`h-full w-full absolute flex items-center -translate-x-[10rem] -rotate-y-90 `}> 
              {/* left */}
            </div>

            <div style={{ backgroundColor: `#`+boxColor[0][color]['top'] }} className={`h-full w-full absolute flex justify-center items-center -translate-y-[10rem] rotate-x-90 `}>
               {/*top  */}
                <div className='h-5 w-20 bg-black'></div>
            </div>
            <div style={{ backgroundColor: `#`+boxColor[0][color]['bottom'] }} className={`h-full w-full absolute flex items-center translate-y-[10rem] -rotate-x-90 `}> 
              {/* bottom */}
            </div>

            <div style={{ backgroundColor: `#`+boxColor[0][color]['front'] }} className={`h-full w-full absolute flex  justify-center items-center object-contain translate-z-[10rem]`}>
              { !!logo && (
                <img src={logo} className={`h-full w-full object-contain`} />
              )
              }
                <h1 className="h-fit w-full text-center font-bold text-3xl overflow-clip">{title}</h1>
              {/* front */}
            </div>

    </div>
  </div>
  );

}

export default Box;