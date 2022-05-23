import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
     <header className="header">
         <ul>
             <li>
                 <Link className="link" to="/"><i>Home</i></Link>
             </li>
             <li>
                 <Link className="link" to="/student"><i>Student</i></Link>
             </li>
             <li>
                 <Link className="link" to="/contact"><i>Contact Us</i></Link>
             </li>
         </ul>
     </header>
    </>
  );
};

export default Header;
