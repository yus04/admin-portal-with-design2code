import React, { useState, useEffect } from 'react';  
import './BillingWidget.css';  
  
const BillingWidget = () => {  
    const [data, setData] = useState({ title: "", description: "" });  
  
    useEffect(() => {  
        fetch('https://test-functions-20240510.azurewebsites.net/api/invoice')  
            .then(response => response.json())  
            .then(data => setData(data))  
            .catch(error => console.error('Error fetching data: ', error));  
    }, []);  
  
    return (  
        <div className="billing-widget">  
            <div className="billing-header">  
                <h1>{data.title}</h1>  
                <p>{data.description}</p>  
            </div>  
            <div className="billing-buttons">  
                <button className="button">残高</button>  
                <button className="button">サブスクリプション</button>  
            </div>  
        </div>  
    );  
};  
  
export default BillingWidget;  
