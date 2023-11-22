// Ram Mohan >
// rammohan2@gmail.com
// Dashboard
// Choose a plan that's just right for you!
// Basic
// $9.99/mo
// Get Started
// Perks
// What you'll get:
// A Upto 25 Users
// Addons
// FAQ
// Support
// Logout
// XYZ Enterprises Pvt. Ltd
// Monthly
// Annually 10%
// Standard
// $99.99/mo
// Get Started
// Premium
// 3389.99kmo
// $199.99/mo
// Get Started
// Upto 25gb Storage
// Email Support
// EXPLORE FEATURES
// What you'll get
// A Upto 50 Users
// Upto 60gb Storage
// Email-Chat Support
// EXPLORE FEATURES
// What you'll get:
// What you'll get:
// A Upto 75 Users
// Upto 100gb Storage
// Email-Chat-Whatsapp Support
// EXPLORE FEATURES
// Free Starter
// The quickest and easiest way to try Protocols with basic functionalities
// Get Started
// A Upto 8 Users
// Upto 3gb Storage
// Email Support
// Basics of Documents, Task Flow, Voting, Accounting Accounting, Banking, Banking, Notes, Investor, Director and Team Management included
// Enterprise Plan
// Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success
// Contact Us
// What you'll get
// A More than 75 Users
// Customization of all other features
// ome plans for each features
// +
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LiveHelpIcon from '@mui/icons-material/LiveHelp';
// import PersonIcon from '@mui/icons-material/Person';
// import YardIcon from '@mui/icons-material/Yard';
// import   './Sidebar.css'
// const Siderbar = () => {
//   const [open,setOpen]= useState(false);
//   return (
//     <div className='side'>
//         <img  src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimheuer.com%2Fblog%2Fmaking-circular-images-in-xaml-easily%2F&psig=AOvVaw2AgnX70DpqsYxsft0hEIut&ust=1700703735460000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODft6G91oIDFQAAAAAdAAAAABAF' />
//      <div className='component-part'>
//           <DashboardIcon/>   <p>Dashboard</p>
//          <h3>Perks</h3><YardIcon/>
//          <h3>Address</h3>
//          <h3>FAQ</h3>
//          <LiveHelpIcon/>
//          <h3>Support</h3><PersonIcon/>
//      </div>
//     </div>
//   )
// }

// export default Siderbar


import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PersonIcon from '@mui/icons-material/Person';
import YardIcon from '@mui/icons-material/Yard';
import ExtensionIcon from '@mui/icons-material/Extension';
import logo from '../images/logoimg.png'
import './Sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
       <img
      src={logo} style={{width:"100px"}}
      />
      <p>ahir442@gmail.com</p>

      <div className='toggle-button' onClick={toggleSidebar}>
        ☰
      </div>
     
      <div className='component-part'>
       <span><DashboardIcon />Dashboard</span> 
        
      <span> <YardIcon />Perks</span>
       
           <span> <ExtensionIcon/> Address</span>
        <span> <LiveHelpIcon />SPQ</span>
       
        <span><PersonIcon /> Support</span>
        
      </div>
    </div>
  );
};

export default Sidebar;


