import React from 'react';  
import './App.css';  
import SearchBar from './SearchBar';  
import SideMenu from './SideMenu';  
import Widgets from './Widgets';  
  
function App() {  
  return (  
    <div className="App">  
      <SearchBar />  
      <div className="main-content">  
        <SideMenu />  
        <Widgets />  
      </div>  
    </div>  
  );  
}  
  
export default App;  
