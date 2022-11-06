import { IconBase } from '@react-icons/all-files';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Icon from "@react-icons/all-files"
import '../css/navbar.css'
// import 




const Navbar = () => {

    return (
        <div class="nav">
            {/* <div className='link'> */}
            
                <div class="dropdown">
                    <button class="dropbtn">Lập trình</button>
                    {/* <p>adâd</p> */}
                    <div class="dropdown-content">
                       {/* <p>ftu</p> */}
                        <a href="#">HELLO</a>
                        <a href="#">HTML</a>
                        <a href="#">Python</a>
                        
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Lập trình</button>
                    <div class="dropdown-content">
                        <a href="#">C</a>
                        <a href="#">H</a>
                        <a href="#">Pyn</a>
                    </div>
                </div>
                {/* </div> */}
        </div>

    )
}

export default Navbar;