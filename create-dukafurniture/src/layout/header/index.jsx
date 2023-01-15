import React, { useContext } from 'react'
import HomeDropProp from './dropprop'
import HomeDropPropTwo from './dropprop2'
import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined,HeartOutlined,ShoppingOutlined } from '@ant-design/icons';
import { NavLink  } from "react-router-dom";
import {ProductsContext} from '../../context/context';
// import { SearchOutlined } from '@ant-design/icons';


import { Button, Col, Dropdown, message, Row, Space } from 'antd';
// import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
// import { Button, Col, Dropdown, message, Row, Space } from 'antd';
const handleMenuClick = (e) => {

  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
   



    label: ' Blog grid left sidebar',
    key: '1',
  
    primary: true,
    // disabled: true,
  },
  {
    label: 'Blog grid right sidebar',
    key: '2',

    primary: true,
    // disabled: true,
  },
  {
    label: 'Blog grid no sidebar',
    key: '3',
  
    primary: true,
    // disabled: true,
  },
  {
    label: 'Blog List left sidebar',
    key: '4',
   
    primary: true,
    // disabled: true,
  },
  {
    label: 'Home page 5',
    key: '5',
  
    primary: true,
    // disabled: true,
  },
  {
    label: 'Home page 6',
    key: '6',
 
    primary: true,
    // disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
// import SidebarMenu from './menu'
const HeaderCom = () => {
  const { basket, setBasket,count,setCount } = useContext(ProductsContext);
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"space-between", }}>
     <div style={{display:"flex",alignItems:"center", justifyContent:"center",columnGap:"15px",}}>
      <MenuOutlined style={{columnGap:"20px", fontSize:"25px"}}/>
      <SearchOutlined style={{fontSize:"25px"}}/>
      </div>
      
<div style={{display:"flex", columnGap:"3%", alignItems:"center"}} >
<HomeDropProp/>
<HomeDropPropTwo/>
<NavLink to={"/"}><div><img src="https://cdn.shopify.com/s/files/1/0664/0795/6738/files/Logo_190x@2x.png?v=1664464266" alt="" /></div></NavLink>
    
    
        
  
      <div>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Blog
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown> 
    </div>

     <div >
 
       <ul style={{listStyle:"none",display:"flex", columnGap:"10%", fontSize:"25px"}}>
        <li>
        <NavLink to="/about" end style={{color:"black"}}>
  About
</NavLink>
        </li>
      

   
          <li>
          <NavLink to="/contact" end style={{color:"black"}}>
  Contact 
</NavLink>
          </li>
        </ul>
       
 
      
     
     </div>
  

    
  

</div>

<div style={{fontSize:"25px", columnGap:"20px"}}>
<UserOutlined style={{fontSize:"25px", columnGap:"40px"}}/>
<HeartOutlined style={{fontSize:"25px",columnGap:"40px"}}/>

<NavLink to={"/productsinbasget"}><ShoppingOutlined  style={{fontSize:"25px",columnGap:"40px", color:"blue"}}/></NavLink>
<button style={{borderRadius:"50%"}}>{count}</button>
</div>
    </div>
  )
}

export default HeaderCom
