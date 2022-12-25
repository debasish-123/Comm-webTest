import React from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar";
import Header  from "./Components/Header";


function App() {

  
  return (

    <>
    <center>
    <h1>Categories - Search</h1>
   </center>

   
      <div className="App">
      <SearchBar placeholder="Enter Food Name..." />
      <Header title = "My Project" />
    </div>
    
    
  
  </>

  )
}


export default App;
