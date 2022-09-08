import { Collapse, Tabs, Row, Timeline, Col, Avatar, Divider, Space,Button,Upload } from 'antd';
import { ClockCircleOutlined,UploadOutlined } from '@ant-design/icons';
import { Card, List } from 'antd';
import React from 'react';
import Logs from './logs';
const { Panel } = Collapse;
const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500',
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      }
    ]
    };
const DetailsBar = () => {
    return <>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tasks" key="1">
                <Row>
                    <Col flex="1 1 200px">
                        <Card title="">hello worl ad a ADS ahgd lAHGDHajd ahg asdflashfzhsdl afga asdgf ahjsdfg ahsdgf a</Card>
                    </Col>
                    <Col flex="0 1 300px">
                        <div className="site-card-border-less-wrapper">
                            <Card title="Information">
                                <Avatar style={{ backgroundColor: "#4d83a1", verticalAlign: 'middle' }} size="large" >
                                    Abdellah
                                </Avatar>
                                <span style={{ margin: '0 16px', verticalAlign: 'middle' }}>Abdellah Oulahyane</span>
                                <Timeline style={{ paddingTop: 35 }}>
                                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                                        Technical testing 2015-09-01
                                    </Timeline.Item>
                                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                </Timeline>
                            </Card>

                            <Card style={{ marginTop: "15px" }} title="Files">
                                
                                <Upload {...props}>
                                    
                                </Upload>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="History" key="2">
                <Logs/>
            </Tabs.TabPane>
        </Tabs>
    </>;
};
export default DetailsBar;