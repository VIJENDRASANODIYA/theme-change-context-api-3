import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom"
import { useContext,  useState } from "react"
import { ThemeContext } from "../ThemeContext"



function NavbarCom() {
  const theme=useContext(ThemeContext)
    return (
        

<div >
            <nav className="navbar bg-primary   d-flex justify-content-around">
                <div className="container-fluid" >
                    <a className="navbar-brand"  style={{fontSize:"35px"}} href="#">Navbar scroll</a>
                    <div className= "d-flex  d-flex justify-content-around list-unstyled" id={theme}>
                    <li style={{listStyleType:"none",padding:"0px 20px"}}><Link to='/Home' style={{textDecoration:"none"}} id={theme}>Home</Link></li>
                    <li style={{listStyleType:"none",padding:"0px 20px"}}><Link to='/About'id={theme}>About</Link></li>
                    <li style={{listStyleType:"none",padding:"0px 20px"}}><Link to='/Blog'id={theme}>Blog</Link></li>
                    <li style={{listStyleType:"none",padding:"0px 20px"}}><Link to='/Contect'id={theme}>Contect</Link></li>
                    <li style={{listStyleType:"none",padding:"0px 20px"}}><Link to='/More'id={theme}>More</Link></li>
                    </div>



                    <div>
                       
                        <form className="d-flex justify-content-around" role="search">
                            
                            <button style={{padding:"0px 20px"}} className="btn btn-outline-success bg-dark" type="submit">Login</button>
                            <button  style={{padding:"0px 20px" , margin:"0px 25px"}} className="btn btn-outline-success bg-dark" type="submit">Contect</button>
                            
                         
                        </form>
                    </div>
                </div>
            </nav>
        </div>
 
    )
}
export default NavbarCom 