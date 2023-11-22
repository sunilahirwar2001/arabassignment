import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EmailIcon from '@mui/icons-material/Email';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './MainSection.css';
import DoneAllIcon from '@mui/icons-material/DoneAll'
const MainSection = () => {
  return (
    <div>
            <h1 style={{ display: 'inline-block' }}>Choose a plan that's right for you!</h1>

    <div className='main-area'>
      <div className='basic'>
        <h2>Basic</h2> 
       <h4> $9.99/mo</h4>
       <button style={{background:"crimson"}}>Get Started<TrendingFlatIcon/> </button>
        <hr></hr>
        <div className='below'>
          <h5>What you'll get:</h5>
          <span><Person2Icon/> A Upto 25 Users </span>
          <span><CloudUploadIcon/> Upto 25gb Storage</span>
          <span><EmailIcon/>Email Support</span>
          <button>Explore feature</button>
        </div>
      </div>

      <div className='standard'>
        <h2>Standard</h2> 
       <h4> $99.99/mo</h4>
       <button style={{background:"yellow"}}>Get Started<TrendingFlatIcon/></button>
        <hr></hr>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 90 Users </span>
      <span><CloudUploadIcon/> Upto 60gb Storage</span>
      <span><EmailIcon/>Email+chat Support</span>
      <button>Explore feature <TrendingFlatIcon/></button>
        </div>
      </div>

      <div className='premium'>
        <h2>Premium</h2> 
       <h4> $199.99/mo</h4>
       <button style={{background:"aqua"}}>Get Started <TrendingFlatIcon/></button>
        <hr></hr>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 75 Users </span>
      <span><CloudUploadIcon/> Upto 100gb Storage</span>
      <span><EmailIcon/>Email+ Chat + Whatsapp Support</span>
      <button>Explore feature</button>
        </div>
      </div>
</div>
      <br/>
      <div className='free-star'>
        <h2>Free Starter</h2> 
        <p> The Quickest and easiest way to try Protocols with basic functionalities </p>
       <button style={{background:"green"}}>Get Started<TrendingFlatIcon/> </button>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 8 Users </span>
      <span><CloudUploadIcon/> Upto 3gb Storage</span>
      <span><EmailIcon/>Email Support</span>
      <button>Explore feature</button>
      <p>Basic of Documents Task Flow,Voting,Accounting,Bankingr</p>
        </div>
      </div>

      <div className='enterprise'>
        <h2>Enterprise Plan</h2> 
        <p> Effortlessly customize and fine -tune services as your needs shift. ensuring the perfect tools for success   </p>
       <button style={{background:"blue"}}>Contanct Us<TrendingFlatIcon/> </button>
        <div className='below'>
      <h5>What you'll get:</h5>
      <span><Person2Icon/> A Upto 75 Users </span>
       <span> <DoneAllIcon/> Customization of all other features</span>
        </div>
      </div>
    </div>
  )
}

export default MainSection
