import React from 'react'
import axios from 'axios';
import {useEffect,useState} from "react";
import { BrowserRouter as Brouter, Route, Routes, Link } from "react-router-dom";


function Home() {
    const [listOfUsers, setlistOfUsers]=useState([]);

    useEffect(() =>{
      axios.get("http://localhost:3001/users").then((response)=>{
        setlistOfUsers(response.data);
      });
    }, []);
  return (
    <div>
        {
    listOfUsers.map(
    (value,key)=>{return <div className='post'>
      <div className='title'> {value.email}</div>
      <div className='body'> {value.password}</div>
      <div className='footer'> {value.name} <Link to="/createuser">Add comment</Link></div>
      </div>;}
  )
  }
      
    </div>
  )
}

export default Home
