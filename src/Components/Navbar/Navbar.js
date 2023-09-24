import "./Navbar.css"


 export default function Navbar (){
    return(
        <nav className='navbar'>
            <h1 className='nav-brand' >Navbar</h1>
            <a className='nav-menu' href="/"> Home </a>
            <a className='nav-menu' href="/About">About</a>
            <a className='nav-menu' href="/Contact">Menu</a>
        </nav>
    )
}
