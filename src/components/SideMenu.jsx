import React,{useState} from 'react'
import './SideMenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import socialListData from '../data/socialListData';
import SocialListItem from './SocialListItem';
function SideMenu({active , sectionActive}) {
  const[navData,setNavData] = useState(navListData);
  const[socialData , SetSocialNavData] = useState(socialListData);

  const handleNavOnClick = (id,target)=>{
    
    const newNavData = navData.map(nav=>{
      nav.active =false;
      if(nav._id===id)  nav.active =true;
      return nav;
    })  
    setNavData(newNavData);
    sectionActive(target);
  }


  
  return (
    <div className={`SideMenu ${active ? 'active': undefined}`}>
      <a href="#" className='logo'>
        <i className="bi bi-controller"></i>
      <span className="brand">Box-d</span>
      </a>
       <ul className="nav">
      {
        navData.map(item =>( <NavListItem key={item._id} item={item} navOnClick = {handleNavOnClick}/>
          
          ))}
      </ul>
       
       <ul className="social">
          {
            socialData.map(social=>( <SocialListItem key={social._id} social={social} />
            ))}
          
       </ul>
       
       
    </div>
  )
}

export default SideMenu
