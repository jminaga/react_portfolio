import "./navbar.scss"
import {Person, Email} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'navbar ' + (menuOpen && "active")} id='navbar'>

            <div className="wrapper">
                {/* Left div is logo */}
                {/* Right div is hamburger menu */}
                <div className="left">
                    <a href="#intro" className='logo'>見永</a>
                    <div className="itemContainer">
                    <Person className='icon'/>
                    <span>(720)-320-0077</span>
                    </div>
                  
                    <div className="itemContainer">
                    <Email className='icon'/>
                    <span>jared.minaga@gmail.com</span>
                    </div>
                </div>
            

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
