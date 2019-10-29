import React from 'react';
import Logo from "../assets/Logo/Logo-brainflix.svg"
// import Icons from "../assets/Icons/SVG/Icon-search.svg"
import Images from "../assets/Images/Mohan-muruge.jpg"

export default function Header() {
    return(
        <header className="header">
            <div>
                <div>
                <img className="header-logo" src={Logo} alt=""/>
                </div>
                <div>
                <input className="header-input" type="text" name="name" value="" placeholder= "Search"  />
                </div>
                <div>
                    <button>+ UPLOAD</button>
                    <img className="header-image" src={Images} alt="Mohan image"/>
                </div>
            </div>
            
        </header>
    )
}