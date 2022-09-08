import { CheckOutlined,ArrowRightOutlined,MessageOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Button, PageHeader,Descriptions } from 'antd';
import React from 'react';
import DetailsBar from './tabbar';



const routes = [
  {
    path: '',
    breadcrumbName: 'Tasks',
  },
  {
    path: '',
    breadcrumbName: 'Task N 1',
  },
];







const Detail = () => (
    <PageHeader
        ghost={false}
        className="site-page-header"
        onBack={() => window.history.back()}
        title="I Have a problem"
        subTitle="Priority Hight"
        backIcon={<ArrowLeftOutlined />}
        extra={[
        <Button key="1" icon={<MessageOutlined />}></Button>,
        <Button key="2" icon={<ArrowRightOutlined />}>Redirect</Button>,
        <Button key="3" icon={<CheckOutlined />}>Accept</Button>,
        ]}
        
        breadcrumb={{
        routes,
        }}
    >
       <DetailsBar/>
    </PageHeader>
);


export default Detail;