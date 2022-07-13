import './App.css';
import axios from 'axios'
import React, { useEffect } from 'react';


function App() {


  const [ name , setName] = React.useState('')
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ name", name)


  function getdata (){

    axios.get('http://localhost:5000/data').then((res)=>{
    console.log("🚀 ~ file: App.js ~ line 16 ~ axios.get ~ res", res.data)

    setName(res.data)

    }).catch(()=>{


      console.error('err');
    })

  }
useEffect (()=>{
  getdata()
},[])
  return (
    <div className="App">
      


   <h1>hello {name}</h1>


    </div>
  );
}

export default App;
