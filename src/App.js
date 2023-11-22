import logo from './logo.svg';
import './App.css';
import Siderbar from './components/Siderbar';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:"flex"}}>
        <Siderbar/>
        <div>
          <MainSection/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
