import NavBar from "../utils/navBar"

function HomePage(){
  return (
    <div className="homePage h-full w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-center font-bold text-[2rem] text-[#b9b486]">WELCOME!</h1>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center">
        <h1 className="w-[90%] text-center">NOTHING MUCH TO SEE HERE AT HOME PAGE YET...</h1>
      </div>
    </div>
  )
}

export default HomePage