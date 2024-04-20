
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";


import "./index.css"


const Navbar=()=>(

   

  
        <div className="nav">

<div className="navSection1">
   
       <div >
            <img src="https://tse1.mm.bing.net/th/id/OIP.ENrZMwnNL5EtksnhsgXP6gHaE_?rs=1&pid=ImgDetMain" className="Logo"/>
      </div>

      <div>
          <h1>LOGO</h1>
      </div>

        <div className="navItems">
        <CiSearch size={20} className="icons"/>
        <FiUser size={20} className="icons"/>
        <BsBookmark size={20} className="icons"/>
        <IoBagOutline size={20} className="icons"/>
       
       </div>

 </div>

<div className="navSection2">
    <p>SHOP</p>
    <p>SKILLS</p>
    <p>STORIES</p>
    <p>ABOUT</p>
    <p>CONTACT Us</p>
</div>

</div>)


export default Navbar

