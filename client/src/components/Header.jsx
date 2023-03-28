import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
        <div className="logo">Cultural Hackaton</div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/admin'>Admin</NavLink>
        </nav>
    </header>
  )
}

export default Header