import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined, CheckOutlined } from '@ant-design/icons';
import { Collapse,Switch,DatePicker,Space } from 'antd';
import { Upload } from 'antd';

const { Panel } = Collapse;



const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },

  defaultFileList: [

  ],
};




const Frm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >

      <Form.Item label="Author">
        <Input name='author' placeholder="Author" />
      </Form.Item>

      <Form.Item label="Priority" name="priority">
        <Radio.Group value={formLayout}>
          <Radio.Button value="Low">Horizontal</Radio.Button>
          <Radio.Button value="Meduim">Vertical</Radio.Button>
          <Radio.Button value="Hight">Inline</Radio.Button>
          <Radio.Button value="Cretical">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Subject">
        <Input placeholder="Tags" />
      </Form.Item>

      <Form.Item label="Tags">
        <Input.TextArea placeholder="Tags" />
      </Form.Item>
      <Form.Item label="Files (Optional)">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload Files</Button>
        </Upload>
      </Form.Item>

      <Form.Item label=" ">
        <Collapse defaultActiveKey={['1']} >
          <Panel header="Additional Option" key="1">
            <Form.Item label="REquest ....">
              <Switch defaultChecked onChange={null} />
            </Form.Item>
            <Form.Item label="Duration to Done The project ">
              <Space direction="vertical" size={12}>
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
              />
              </Space>
            </Form.Item>
          </Panel>

        </Collapse>
      </Form.Item>

      <Form.Item {...buttonItemLayout}>
        <Button type="primary" icon={<CheckOutlined />}>Save</Button>
      </Form.Item>
    </Form>
  );
};

export default Frm;