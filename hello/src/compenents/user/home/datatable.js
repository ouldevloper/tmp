import { Space, Table, Tag } from 'antd';
import axios, { Axios } from 'axios';
import { Dispatch, useReducer } from 'react';
import React, { useEffect, useState } from 'react';
import getData from '../../../classes/fetch';


const showTask =  (id)=>{
  console.log(id);
}


const colors = {
  0:"blue",
  1:"green",
  2:"yellow",
  3:"red"
};
const tags = {
  0:"low",
  2:"meduim",
  3:"hight",
  4:"critical"
}


const DataTable = (props) => {
  const [isLoading,setIsLoding] = useState(false);
  const [data,setData] = useState([]);
  function loadData(){

      let url = "";
      switch(props.filter){
        case "accepted" :
          url = "http://127.0.0.1/api/task/user";
          break;
        case "done":
          url = "http://127.0.0.1/api/task/userarchieve";
          break;
      }
      const params = new FormData();
      params.append('user_id', 0);
      async function getData (){
        setIsLoding(true);    
        await axios.post(url,params).then(resp=>{
          setData(resp.data);
        }).finally(()=>setIsLoding(false));
      }
    getData();
  }
  const deleteTask = async (id)=>{
    let params = new URLSearchParams();
    params.append("id",id);
    await axios.post("http://127.0.0.1/api/task/delete",params).then((response)=>{
      console.log(response.data);
    });
      await loadData();
  }
  const columns = [
    {
      title: 'Title',
      dataIndex: 'created_at',
      key: 'created_at',
      dataIndex: 'created_at',
      render: (text)=> <span>Create at : {text}</span>
  
    },
    {
      title: 'Priority',
      key: 'priority',
      dataIndex: 'priority',
      align:"center",
  
      render: (text,item)=>{
        const key=  item.id;
        const color= colors[item.priority];
        const tag= tags[item.priority];
        return <Tag color={color} key={item.id}>{tag}</Tag>;
      }
    },
    {
      title: 'Action',
      key: 'id',
      align:"center",
      render: (id) => {
  
        return <Space size="middle">
          <a onClick={()=> showTask(id.id)}>Show Task</a>
          <a onClick={()=> deleteTask(id.id)}>Delete</a>
        </Space>
      },
    },
  ];
  useEffect( ()=>{loadData();},[]);
  return isLoading?"Loading":<Table columns={columns} dataSource={data} />;
}
export default DataTable;