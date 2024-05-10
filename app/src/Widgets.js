import React from 'react';  
import './Widgets.css';  
import MicrosoftTeamsWidget from './MicrosoftTeamsWidget';  
import UserManagementWidget from './UserManagementWidget';  
import BillingWidget from './BillingWidget';  
import TrainingGuidesWidget from './TrainingGuidesWidget';  
import OfficeAppsWidget from './OfficeAppsWidget';  
  
function Widgets() {  
  return (  
    <div className="widgets-container">  
      <MicrosoftTeamsWidget />  
      <UserManagementWidget />  
      <BillingWidget />  
      <TrainingGuidesWidget />  
      <OfficeAppsWidget />  
    </div>  
  );  
}  
  
export default Widgets;  
