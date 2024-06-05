import Profile from "../Profile/Profile"
import News from "../News/News"
import Messages from "../Messages/Messages"
import Peoples from "../Peoples/Peoples"
import { NavLink, Route, Routes } from "react-router-dom"
import Music from "../Music/Music"
import Settings from "../Settings/Settings"
import { BrowserRouter } from "react-router-dom"

const Navbar = () => {
    return(
        <div>
            {/* Таким образом получается осуществить пути и переходы одновременно под одним BrowserRouter`ом */}
            <BrowserRouter>
                    <ul className="navbar">
                        {/* activeClassName = 'active' имба штука, можно сделать так, чтобы активная ссылка отображалась по другому */}
                        <li><NavLink activeClassName='active' className='navbar-item' to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName='active' className='navbar-item' to="/news">News</NavLink></li>
                        <li><NavLink activeClassName='active' className='navbar-item' to="/messages">Messages</NavLink></li>
                        <li><NavLink activeClassName='active' className='navbar-item' to="/peoples">Peoples</NavLink></li>
                        <li><NavLink activeClassName='active' className='navbar-item' to="/settings">Settings</NavLink></li>
                        <li><NavLink activeClassName='active' className='navbar-item' to="/music">Music</NavLink></li>
                    </ul> 

                <div  className='content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/messages/*" element={<Messages/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/peoples/*" element={<Peoples/>}/>
                        <Route path="/music/*" element ={<Music/>} />
                        <Route path="/settings/*" element = {<Settings/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            
        </div>
    )
}

export default Navbar