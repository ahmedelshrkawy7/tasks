import React, {  useState } from 'react';
import './App.css';
import {BiSolidDownArrow} from 'react-icons/bi'



const DropdownMenu=({children})=>{
 
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
    /* we add Menu Item but depends on isOpen and pass the array as a props*/
      {
      isOpen && <MenuItems  Items={children} />
      
      }
    </div>
  )
}




const MenuItems = ({Items}) => {
  console.log(Items)
  return (
    <div className='menuItems'>
    /* here we loop throw the array and display it by map*/
        {
          Items.map((item)=>{
            
            return(
              <div>
                {item}
              </div>
            )
          })
        }
    </div>
  )
};


const App = () => {
/*  add any array of Strings */
  let Items =[ 'item 1','item 2','item 3','item 4']
  return (
    <div className='app'>

    /*  we pass the array as aprops to Dropdown Component*/
      <DropdownMenu children= {Items}/>
      
    </div>
    
    
    
  );
};

export default App;
