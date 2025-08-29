function HomePage(){

  return (
    <div className="homePage h-full w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-center font-bold text-[2rem] text-blue-300">WELCOME!</h1>
      <div className="h-fit sm:w-[80%] md:w-[40%] p-4 flex justify-center border border-blue-300 rounded-2xl">
        <h1 className="w-[100%] text-white text-justify" >Create a dedicated, free, and account-free suggestion box for your website. This simple tool lets visitors provide anonymous feedback, ideas, or comments without any sign-up process, making it easy to gather honest, unfiltered input to improve your site.    </h1>
      </div>
    </div>
  )
}

export default HomePage