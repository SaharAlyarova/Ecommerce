import React from 'react';
import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, message, Row, Space } from 'antd';
// import { DownOutlined, UserOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
// import { Button, Col, Dropdown, message, Row, Space } from 'antd';
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Home page 1',
    key: '1',
  
    primary: true,
    // disabled: true,
  },
  {
    label: 'Home page 2',
    key: '2',

    primary: true,
    // disabled: true,
  },
  {
    label: 'Home page 3',
    key: '3',
  
    primary: true,
    // disabled: true,
  },
  {
    label: 'Home page 4',
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




const HomeDropProp = () => (
   <div >
      
    
  
    <div>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Home
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown> 
    </div>






    </div>
);
export default HomeDropProp;