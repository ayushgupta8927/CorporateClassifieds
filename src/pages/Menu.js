import React,{useState} from 'react'
import { MenuData } from './MenuData';
import  {GrFilter} from 'react-icons/gr';

import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const [state, setState] = useState(false);
    const showDropDown=()=>{
        setState(true);
    }
    const hideDropdown=()=>{
        setState(false);
    }
  return (<>
    <div className="dropdown">
        <div className='dropdown-menu' onMouseEnter={showDropDown} onMouseLeave={hideDropdown}>
            filter<GrFilter/>
            {state ?(
                <ul className='dropdown-list' on onMouseEnter={showDropDown}>
                    {/* console.log(MenuData); */}
            {MenuData.map((item,index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setState(false)}
              >
                {item.title}
              </Link>
            </li>
          );})}

            </ul>):null}
        </div>
    </div>
  </>
    // <div>
    //     <ul
    //     className={dropdown ? "services-submenu clicked" : "services-submenu"}
    //     onClick={() => setDropdown(!dropdown)}
    //   >
    //     {MenuData.map((item,index) => {
    //       return (
    //         <li key={index}>
    //           <Link
    //             to={item.path}
    //             className={item.cName}
    //             onClick={() => setDropdown(false)}
    //           >
    //             {item.title}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  )
}

export default Menu