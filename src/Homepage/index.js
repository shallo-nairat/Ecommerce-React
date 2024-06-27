import Pic from '../Images/Pic.jpg';
import "./index.css";
import { MdOutlinePersonOutline } from "react-icons/md";

import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";





const Navbar =()=>{

    return(
       <>
      <div className="Navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <IoCartOutline />
        <GoHeart />
        <CiSearch />
        <MdOutlinePersonOutline />

        </div>
        <div className='landingpage'>
        <img src={Pic} />
        <div >
            <p>New Arrival</p>
            <h2>Discover Our</h2><br></br><h2>New Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ut<br/>
            elit tellus, luctus nec uliamcarper mattis</p>

            <button id='button'>Buy Now</button>
            <br></br>
            <br></br>
            
        </div>
        </div>
        <h3>Browse The Range</h3>
  

        </>

        
    );
    
  
  }

  export default Navbar;