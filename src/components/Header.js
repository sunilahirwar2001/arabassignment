// import React from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import img1 from '../images/pimage.png'
// const Header = () => {
//   return (
//     <div children='header'>
//     <div className='imgbar'>
//         <img src={img1} />
//      </div>
//       <div className='emailid'></div>
//       <p>XYZ Enterprises limited</p>
//       <ExpandMoreIcon/>

     
//     </div>
//   )
// }

// export default Header


import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from '../images/pimage.png';
import img2 from '../images/imgage2.jpg'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='imgbar'>
       <img src={img1} alt='Logo' style={{background:"white"}} /> 
      </div>
      <div className='emailid'>
     
        {/* Add your email or other content here */}
      </div>
      <p className='apply'> XYZ Enterprises Limited</p>
      <ExpandMoreIcon className='expand-icon' />
    </div>
  );
};

export default Header;

