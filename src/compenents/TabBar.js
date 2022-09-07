import { List, Tabs } from 'antd';
import React from 'react';
import DataTable from './DataTable';

const TabBar = (props) => {
    const childs = props.items;
    const items = childs.map((index,item)=>{
        return  { label: item.title, key: index+1, children:item.child  };
    });
    return  <Tabs items={items}  activeKey="1" />;
};

export default TabBar;