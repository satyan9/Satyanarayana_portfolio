import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import linkdin from '../../images/linkdin.jpg';
import git from '../../images/OIP.jpg';
import { ImMenu } from "react-icons/im"; // Menu icon

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='nav'>
            {/* Logo and mobile menu icon */}
            <div className='navHeader'>
                <Link className='logo'>
                    Satyanarayana Reddy<span className='highlight'> Kolagatla</span>
                </Link>

                {/* Menu Icon */}
                <ImMenu
                    className='menuIcon'
                    onClick={() => setShowMenu(!showMenu)}
                    color='blue'
                    size={30}
                />
            </div>

            {/* Desktop Menu */}
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={200} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='wrapper' spy={true} smooth={true} offset={-50} duration={200} className='desktopMenuListItem'>Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={200} className='desktopMenuListItem'>Contact</Link>
            </div>

            {/* Desktop Icons */}
            <div className='desktopMenuBtn'>
                <a href='https://www.linkedin.com/in/satyanarayana-reddy-kolagatla-669a412a1' target="_blank" rel="noreferrer">
                    <img src={linkdin} alt='LinkedIn' className='desktopMenuImg' />
                </a>
                <a href='https://github.com/satyan9' target="_blank" rel="noreferrer">
                    <img src={git} alt='GitHub' className='desktopMenuImg' />
                </a>
            </div>

            {/* Mobile Menu */}
            <div className='mobMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={200} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='wrapper' spy={true} smooth={true} offset={-50} duration={200} className='listItem' onClick={() => setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={200} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
                <div className='mobMenuBtn'>
                    <a href='https://www.linkedin.com/in/satyanarayana-reddy-kolagatla-669a412a1' target="_blank" rel="noreferrer">
                        <img src={linkdin} alt='LinkedIn' className='mobMenuImg' />
                    </a>
                    <a href='https://github.com/satyan9' target="_blank" rel="noreferrer">
                        <img src={git} alt='GitHub' className='mobMenuImg' />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
