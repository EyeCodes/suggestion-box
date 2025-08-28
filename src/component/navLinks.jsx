import { Link } from "react-router-dom"

function NavLinks({linkTitle, routeName, styleCss}){
  return (
      <div className="links flex justify-center items-center">
        <Link to={`/${routeName}`}>
          <h1 className={`font-bold text-white text-center ${styleCss}`}>{linkTitle}</h1>
        </Link>
      </div>
  )
}

export default NavLinks