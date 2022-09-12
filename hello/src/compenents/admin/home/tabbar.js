import { Tabs } from 'antd';
import React from 'react';
import TaskList from './tasklist';

const Tabbar = () => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Active" key="1">
      <TaskList />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Waitting" key="2">
      <TaskList />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Archieve" key="3">
      <TaskList />
    </Tabs.TabPane>
  </Tabs>
);

export default Tabbar;