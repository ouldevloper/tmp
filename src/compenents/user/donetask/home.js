import { Modal, Button, Rate, Space, Collapse } from 'antd';
import { DownCircleOutlined } from "@ant-design/icons";
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
const { confirm } = Modal;


const taskDone = (title) => {
  title = "Task " + title+" Done!";
  confirm({
    destroyOnClose:true,
    title: title,
    icon: <DownCircleOutlined />,
    onOk() {
      Modal.destroyAll();
    },

    onCancel() {
      //Modal.destroyAll();
    },


    content: (
      <div>
        <p>
          Plaise Give us ur Feedback and rating our Service
        </p>
          <Rate defaultValue={0} ></Rate>
        <br />
        <TextArea placeholder='PLaise gives us your feedback'></TextArea>
      </div>
    ),


  });

};


export default taskDone;