import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

import React from 'react';

const Btn = (props) => (
  <>
    <Button
    href={props.link}
     icon={props.icon} 
     key={props.key??""}
     size="meduim">
      {props.value}
      
    </Button>
   
  </>
);

export default Btn;