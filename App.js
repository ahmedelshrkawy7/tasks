import React, {  useState } from 'react';
import './App.css';
import {BiSolidDownArrow} from 'react-icons/bi'



const DropdownMenu=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className='dropDownMenu'>
      <div  className='dropDownMenu_button'onClick={toggleMenu} onMouseEnter={toggleMenu} onMouseLeave={()=>setIsOpen(false)}>
        Menu
        <BiSolidDownArrow size={15} color='#fff'/>
        </div>

      {
      isOpen && <MenuItems /*toggle={toggleMenu}*/ />
      
        
     
         }
    </div>
  )
}




const MenuItems = ({toggle}) => {
  return (
    <div className='menuItems'/*onMouseLeave={toggle}*/>

    <div>option 1</div>
    <div>option 2</div>
    <div>option 3</div>
    <div>option 4</div>
      
    
    </div>
  )
};


const App = () => {
  return (
    <div className='app'>
      <DropdownMenu/>
      
    </div>
    
    
    
  );
};

export default App;