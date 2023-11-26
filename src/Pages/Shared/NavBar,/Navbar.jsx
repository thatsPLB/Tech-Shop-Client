import { Link } from "react-router-dom";
import Newuser from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";
const NavBar = () => {
    const {user,logOut} =useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(() => { })
            .catch(error => console.log(error));
    
    }

  const navOptions = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      {
        user ? <>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        </> : <>
      <li><Link to='/login'>LogIn</Link></li>
        
        </>
      }
  </>

  return (
      <>
          <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {navOptions}
                      </ul>
                  </div>
                  <a className="btn btn-ghost normal-case text-xl">Unique Tech</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      {navOptions}
                  </ul>
              </div>
              <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={Newuser} />
        </div>
      </label>
        </div>
          </div>
      </>
  );
};

export default NavBar;