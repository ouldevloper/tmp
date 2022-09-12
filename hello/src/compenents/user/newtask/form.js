import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined, CheckOutlined } from '@ant-design/icons';
import { Collapse, Switch, DatePicker, Space } from 'antd';
import { Upload } from 'antd';
import moment from 'moment';
import axios from 'axios';

const { Panel } = Collapse;







const Frm = () => {
  const USER_ID = 0;
  const [files,setFiles] = useState([]);
  const [form] = Form.useForm();

  const [dateValue, setDateValue] = useState(null);
  const [isTextIncluded, setTextIncluded] = useState(false);
  const props = {
    onRemove: (file) => {
      const index = files.indexOf(file);
      const newFileList = files.slice();
      newFileList.splice(index, 1);
      setFiles(newFileList);
    },
    beforeUpload: (file) => {
      setFiles([...files, file]);
      return false;
    },
    files,
  };
  const onIsTextIncluded = (checked) => {
    setTextIncluded(checked);
  }

  const onDateChange = (_, dateVal) => {
    setDateValue(moment(dateVal));
  }
  const formItemLayout =
  {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  }
    ;
  const buttonItemLayout =
  {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };


  const onFinish = (values) => {
    let data = new FormData();
    const params = new URLSearchParams(values);
    files.forEach((file) => {
      data.append('files[]', file);
    });
    for(const item in values){
      data.append(item,values[item]);
    }
    data.append("user_id",USER_ID);
    axios.post("http://127.0.0.1/api/task/new",data).then((response)=>{
      console.log(response.data);
    });
  }
  return (
    <Form
      onFinish={onFinish}
      {...formItemLayout}
      layout='horizontal'
    >

      <Form.Item
        label="Author"
        name="author"
        rules={[
          {
            required: true
          }
        ]
        }
        hasFeedback
      >
        <Input name='author' placeholder="Author" />
      </Form.Item>

      <Form.Item label="Priority" required hasFeedback name="priority">
        <Radio.Group value={0}>
          <Radio.Button value="0">Low</Radio.Button>Tags
          <Radio.Button value="1">Meduim</Radio.Button>
          <Radio.Button value="2">Hight</Radio.Button>
          <Radio.Button value="3">Critical</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Subject" required hasFeedback name="subject">
        <Input placeholder="Subject goes here!" />
      </Form.Item>

      <Form.Item label="Description" required hasFeedback name="description">
        <Input.TextArea placeholder="Description goes here!ll" />
      </Form.Item>
      <Form.Item label="Files (Optional)" required hasFeedback name="files">
        <Upload multiple {...props}>
          <Button icon={<UploadOutlined />}>Upload Files</Button>
        </Upload>
      </Form.Item>

      <Form.Item label=" ">
        <Collapse defaultActiveKey={['1']} >
          <Panel header="Additional Option" key="1">
            <Form.Item label="Are Text Included" name="isAccoumpanyingText">
              <Switch onChange={onIsTextIncluded} />
            </Form.Item>
            <Form.Item label="Duration to complete Task" name="periodOfExecution">
              <Space direction="vertical" size={12}>

                <DatePicker
                  onChange={onDateChange}
                  value={dateValue}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </Space>
            </Form.Item>
          </Panel>

        </Collapse>
      </Form.Item>

      <Form.Item {...buttonItemLayout}>
        <Button onSubmit={onsubmit} type="primary" icon={<CheckOutlined />} htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
};

export default Frm;