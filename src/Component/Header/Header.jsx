import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
           <li className="text-[#4cd137] text-xl "><NavLink to="/" className="text-[#4cd137] text-xl">Home</NavLink></li>
           <li className="text-[#000] text-xl"><NavLink to="/Books">Listed Books</NavLink></li>
           <li className="text-[#000] text-xl"><NavLink to="/Read">Pages to Read</NavLink></li>
           <li className="text-[#000] text-xl"><NavLink to="/Services">Services</NavLink></li>
           <li className="text-[#000] text-xl"><NavLink to="/ContactUs">Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold text-[#4cd137]">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn bg-[#4cd137] text-white text-xl">Sign In</a>
    <a className="btn bg-[#45aaf2] text-white text-xl">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Header;