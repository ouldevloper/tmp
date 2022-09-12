import { Tabs } from 'antd';
import React, { useState } from 'react';
import DataTable from './datatable';


const UserTabbar = (props) => {
  return(<>
  <Tabs defaultActiveKey="1">
  <Tabs.TabPane tab="Active" key="1">
    <DataTable filter="accepted"/>
  </Tabs.TabPane>
  <Tabs.TabPane tab="Archieve" key="3">
    <DataTable filter="done"/>
  </Tabs.TabPane>
</Tabs>
  </>)
};

export default UserTabbar; 