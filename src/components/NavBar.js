import {NavLink,Link} from 'react-router-dom';
import ACMlogo from '../images/ACMimg.png'
import {HashLink} from 'react-router-hash-link'
import {NavHashLink} from 'react-router-hash-link'
import {GiHamburgerMenu} from'react-icons/gi'
import {ImCancelCircle} from 'react-icons/im'
import '../styles/navbar.css'
import { useState,useEffect } from 'react';
import '../jsonFiles/NavItems';
import { eventHashItems, gallHashItems, navItems, teamItems } from '../jsonFiles/NavItems';
function NavBar(){  
    let [mob,nmob]=useState('');
    let [cli,acli]=useState('fa fa-bars');
    const [drpdown,setDrpdown]=useState(false);
    const [galldrpdown,setGallDrpdown]=useState(false);
    const [evnsdrpdown,setEvnsDrpdown]=useState(false);
    
    const chClass=()=>{
        if(cli==='fa fa-bars'){
            acli('fa fa-times')
            nmob("#navbar active")
        }
        else{
            acli('fa fa-bars')
            nmob("#navbar")
        }
    }
    const [scrolled,setScrolled]=useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 100 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=[];
  if(scrolled){
    x.push('scrolled');
  }
return(
    <div>
        <div>
        <nav className={x.join(" ")}>
            <div className='logo'>
            <Link to="/"> <img className='logimg' src={ACMlogo}></img></Link>
            </div>
        <div className='navitems'>
            <ul id="navbar" className={mob}>
                
                {navItems.map(item => {
                    
                    if(item.title==="Events")
                    {
                        return(
                
                            <li className={drpdown ? "navitselec" : "navit"}
                            key={item.id}
                            onMouseEnter={()=>{setDrpdown(true);
                                                                 
                            }}
                            onMouseLeave={()=>{setDrpdown(false);
                                                
                            }
                            }>
                            <NavLink className="navl"
                                style={({ isActive }) =>
                                isActive
                                ? {
                                color: 'aqua',
                                zIndex: 1,
                                fontStyle:'italic',
                                transition:'0.3s ease-out'
                    }
                    : {}
                 } to={item.path}>{item.title}</NavLink>
                { drpdown && 
                 <div>
                    <ul className="evns-yr-menu"
                        onClick={()=>{setDrpdown(!drpdown)
                            chClass()
                        }}>
                        {eventHashItems.map(item=>{
                            return(
                                <li key={item.id}>
                                    <HashLink to={item.path} className="editem">{item.title}</HashLink>
                                </li>
                            );

                        })}
                    </ul>    
                    </div>
                }
                </li>
                
                );

                }
                if(item.title==="Gallery")
                    {
                        return(
                
                            <li className={galldrpdown ? "navitselec" : "navit"}
                            key={item.id}
                            onMouseEnter={()=>{setGallDrpdown(true);
                                                                 
                            }}
                            onMouseLeave={()=>{setGallDrpdown(false);
                                                
                            }
                            }>
                            <NavLink className="navl"
                                style={({ isActive }) =>
                                isActive
                                ? {
                                color: 'aqua',
                                zIndex: 1,
                                fontStyle:'italic',
                                transition:'0.3s ease-out'
                    }
                    : {}
                 } to={item.path}>{item.title}</NavLink>
                { galldrpdown && 
                 <div>
                    <ul className="evns-yr-menu"
                        onClick={()=>{setGallDrpdown(!galldrpdown)
                            chClass()
                        }}>
                        {gallHashItems.map(item=>{
                            return(
                                <li key={item.id}>
                                    <HashLink to={item.path} className="editem">{item.title}</HashLink>
                                </li>
                            );

                        })}
                    </ul>    
                    </div>
                }
                </li>
                
                );

                }
                if(item.title==="Team")
                    {
                        return(
                
                            <li className={evnsdrpdown ? "navitselec" : "navit"}
                            key={item.id}
                            onMouseEnter={()=>{setEvnsDrpdown(true);
                                                                 
                            }}
                            onMouseLeave={()=>{setEvnsDrpdown(false);
                                                
                            }
                            }>
                            <NavLink className="navl"
                                style={({ isActive }) =>
                                isActive
                                ? {
                                color: 'aqua',
                                zIndex: 1,
                                fontStyle:'italic',
                                transition:'0.3s ease-out'
                    }
                    : {}
                 } to={item.path}>{item.title}</NavLink>
                { evnsdrpdown && 
                 <div>
                    <ul className= "evns-yr-menu"
                        onClick={()=>{setEvnsDrpdown(!evnsdrpdown)
                                        chClass()
                        }}>
                        {teamItems.map(item=>{
                            return(
                                <li key={item.id}>
                                    <HashLink to={item.path} className="editem">{item.title}</HashLink>
                                </li>
                            );

                        })}
                    </ul>    
                    </div>
                }
                </li>
                
                );

                }
                

                    return(
                    <li key={item.id} className='navit' onClick={()=>(chClass())}>
                    <NavLink className="navl" style={({ isActive }) =>
                         isActive
                        ? {
                            color: 'aqua',
                            zIndex: 1,
                            fontStyle:'italic',
                            transition:'0.3s ease-out'
    
                        }
                    : {}
                 }  to={item.path}>{item.title}</NavLink>
                </li>)
                })}
                
                
                   
            </ul>
        </div>
        <div id="mob">
           <i className={cli} onClick={()=>(chClass())}> </i>
        </div>
        </nav> 
        </div>
        <div>
        </div>
    </div>
);
}
export default NavBar;