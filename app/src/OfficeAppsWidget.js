import React, { useState, useEffect } from 'react';  
import './OfficeAppsWidget.css';  
  
function OfficeAppsWidget() {  
    const [appData, setAppData] = useState({ title: '', description: '' });  
  
    useEffect(() => {  
        fetch('https://test-functions-20240510.azurewebsites.net/api/office_app')  
            .then(response => response.json())  
            .then(data => setAppData(data))  
            .catch(error => console.error('Error fetching data: ', error));  
    }, []);  
  
    return (  
        <div className="office-apps-widget">  
            <div className="office-apps-header">  
                <h1>{appData.title}</h1>  
            </div>  
            <div className="office-apps-content">  
                <p>{appData.description}</p>  
            </div>  
        </div>  
    );  
}  
  
export default OfficeAppsWidget;  
