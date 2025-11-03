
import { Link } from "react-router-dom"
function NavBar(){

    return (
        <div className="navbar">
            <div className="movie-brand">
                <Link to ='/'>My Movie</Link>
            </div>
            <div className="navbar-links">
                <Link to ='/'>🏠︎</Link>
                <Link to ='/favorites'>❤︎</Link>
            </div>
        </div>
    )
}

export default NavBar