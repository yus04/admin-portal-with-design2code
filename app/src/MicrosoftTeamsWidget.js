import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import './MicrosoftTeamsWidget.css';  
  
function MicrosoftTeamsWidget() {  
    const [data, setData] = useState({ title: '', description: '', content: {} });  
  
    useEffect(() => {  
        async function fetchData() {  
            try {  
                const response = await axios.get('https://test-functions-20240510.azurewebsites.net/api/microsoft_teams');  
                setData(response.data);  
            } catch (error) {  
                console.error('Error fetching data:', error);  
            }  
        }  
  
        fetchData();  
    }, []);  
  
    return (  
        <div className="microsoft-teams-widget">  
            <div className="widget-header">  
                <h1>{data.title}</h1>  
                <p>{data.description}</p>  
            </div>  
            <ul className="content-list">  
                <li>{data.content.value1}</li>  
                <li>{data.content.value2}</li>  
                <li>{data.content.value3}</li>  
            </ul>  
            <div className="widget-footer">  
                <button className="manage-teams-btn">Teams を管理する</button>  
                <button className="more-info-btn">詳細情報</button>  
            </div>  
        </div>  
    );  
}  
  
export default MicrosoftTeamsWidget;  
