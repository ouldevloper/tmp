import { Divider, Radio, Table,Tag,Space } from 'antd';
import React, { useState } from 'react';
const colors = {
    1:"red",
    2:"blue",
    3:"green",
    4:"yellow"
};
const columns = [
  {
    title: 'Author',
    dataIndex: 'author',
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          return (
            <Tag color={colors[tag]} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
    {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      {
        key: '1',
        author: 'John Brown',
        priority: "Meduim",
        subject: 'New York No. 1 Lake Park',
        tags:["1","4","3","2","1"]
      },
      
  
]; 
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
 
};

const DataTable = () => {
 
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      
      <Divider />

      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default DataTable;