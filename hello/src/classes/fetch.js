import axios from "axios";


const URL = "http://127.0.0.1/";
export default function getData(path){
    axios.post(URL+path).then((resp)=>{
        return resp.data;
    }).catch((error)=>{
        return null;
    });
}