// TrainingGuidesWidget.js  
import React, { useState, useEffect } from 'react';  
import './TrainingGuidesWidget.css';  
  
const TrainingGuidesWidget = () => {  
    const [trainingGuides, setTrainingGuides] = useState(null);  
  
    useEffect(() => {  
        fetch("https://test-functions-20240510.azurewebsites.net/api/training_guide")  
            .then(response => response.json())  
            .then(data => setTrainingGuides(data))  
            .catch(error => console.error('Error fetching training guides:', error));  
    }, []);  
  
    return (  
        <div className="training-guides-widget">  
            <h1>{trainingGuides?.title || "Loading..."}</h1>  
            <div className="content">  
                {trainingGuides ? Object.entries(trainingGuides.content).map(([key, item]) => (  
                    <div key={key} className="guide-item">  
                        <div className="item-icon"><i className="icon-placeholder"></i></div>  
                        <div className="item-details">  
                            <h2>{item["item-title"]}</h2>  
                            <p>{item["item-description"]}</p>  
                        </div>  
                    </div>  
                )) : <p>Loading guides...</p>}  
            </div>  
        </div>  
    );  
}  
  
export default TrainingGuidesWidget;  
