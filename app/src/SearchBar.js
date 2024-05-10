import React from 'react';  
import './SearchBar.css';  
  
const SearchBar = () => {  
    return (  
        <div className="search-bar">  
            <div className="search-bar__portal-name">管理ポータル</div>  
            <input  
                type="text"  
                className="search-bar__input"  
                placeholder="検索"  
            />  
            <div className="search-bar__icons">  
                <i className="icon icon-settings"></i>  
                <i className="icon icon-user"></i>  
                <i className="icon icon-notification"></i>  
            </div>  
        </div>  
    );  
}  
  
export default SearchBar; 
