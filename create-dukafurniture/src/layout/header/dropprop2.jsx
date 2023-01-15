import React from 'react';
import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, message, Row, Space } from 'antd';
// import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
// import { Button, Col, Dropdown, message, Row, Space } from 'antd';

const items2 = [
    {
      label: 'Zoom product',
      key: '1',
    
      primary: true,
      // disabled: true,
    },
    {
      label: 'Zoom Basic',
      key: '2',
  
      primary: true,
      // disabled: true,
    },
    {
      label: 'Inner zoom',
      key: '3',
    
      primary: true,
      // disabled: true,
    },
    {
      label: 'Lens Zoom',
      key: '4',
      
   
    
     
      primary: true,
      // disabled: true,
    },
    {
      label: ' Mousewheel Zoom',
      key: '5',
    
      primary: true,
      // disabled: true,
    },
    {
      label: 'About Us',
      key: '6',
   
      primary: true,
      // disabled: true,
    },
    {
      label: 'Contact Us',
      key: '7',
   
      primary: true,
      // disabled: true,
    },
    {
      label: ' Faqs',
      key: '8',
   
      primary: true,
      // disabled: true,
    },
    {
      label: ' wishlist',
      key: '9',
   
      primary: true,
      // disabled: true,
    },
    {
      label: '  Shipping & Return',
      key: '10',
   
      primary: true,
      // disabled: true,
    }
    
  ];
  const items =  [
        {
          label: 'Zoom product',
          key: '1',
        
          primary: true,
          // disabled: true,
        },
        {
          label: 'Zoom Basic',
          key: '2',
      
          primary: true,
          // disabled: true,
        },
        {
          label: 'Inner zoom',
          key: '3',
        
          primary: true,
          // disabled: true,
        },
        {
          label: 'Lens Zoom',
          key: '4',
          
       
        
         
          primary: true,
          // disabled: true,
        },
        {
          label: ' Mousewheel Zoom',
          key: '5',
        
          primary: true,
          // disabled: true,
        },
        {
          label: 'About Us',
          key: '6',
       
          primary: true,
          // disabled: true,
        },
        {
          label: 'Contact Us',
          key: '7',
       
          primary: true,
          // disabled: true,
        },
        {
          label: ' Faqs',
          key: '8',
       
          primary: true,
          // disabled: true,
        },
        {
          label: ' wishlist',
          key: '9',
       
          primary: true,
          // disabled: true,
        },
        {
          label: '  Shipping & Return',
          key: '10',
       
          primary: true,
          // disabled: true,
        }
        
      ];
const menuProps = {
  items2,
 
};




const HomeDropPropTwo = () => (
 
      
   
    
  
    <div>
     <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>Shop</Button>
    </Dropdown>
    </div>






   
);
export default HomeDropPropTwo;


// const items2 =