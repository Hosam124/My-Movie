import Home from "./pages/HomePage"
import './style/App.css'
import { Route,Routes } from "react-router-dom"
import Favorites from "./pages/FavoritesPage"
import NavBar from "./components/NavBar"
function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/favorites"  element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
    
    
  )
}

export default App
