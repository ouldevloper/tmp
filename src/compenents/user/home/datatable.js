import { Space, Table, Tag } from 'antd';
import React from 'react';
const colors = {
  1:"red",
  2:"blue",
  3:"green"
}
const columns = [
  {
    title: 'Issued Date',
    dataIndex: 'issued',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {
        
        tags.map((tag) => {
          return (
            <Tag color={colors[tag]} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
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
    issued: 'John Brown',
    tags: ["1","2"],
  },
  {
    key: '1',
    issued: 'John Brown',
    tags: ["1","2"],
  },  {
    key: '1',
    issued: 'John Brown',
    tags: ["1","2"],
  },  {
    key: '1',
    issued: 'John Brown',
    tags: ["1","2"],
  },  {
    key: '1',
    issued: 'John Brown',
    tags: ["1","2"],
  },
 
];

const DataTable = () => <Table columns={columns} dataSource={data} />;

export default DataTable;