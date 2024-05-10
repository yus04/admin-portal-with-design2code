import React, { useState, useEffect } from 'react';  
import './UserManagementWidget.css';  
  
function UserManagementWidget() {  
  const [data, setData] = useState({ title: '', description: '' });  
  
  useEffect(() => {  
    fetch('https://test-functions-20240510.azurewebsites.net/api/user_management')  
      .then(response => response.json())  
      .then(data => setData(data))  
      .catch(error => console.error('Error fetching data: ', error));  
  }, []);  
  
  return (  
    <div className="widget-container">  
      <h1 className="widget-title">{data.title}</h1>  
      <p className="widget-description">{data.description}</p>  
      <button className="add-user-button">ユーザーの追加</button>  
    </div>  
  );  
}  
  
export default UserManagementWidget;  
