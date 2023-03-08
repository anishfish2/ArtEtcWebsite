import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Join from './components/Join';
import ImagePane from './components/ImagePane';


import './App.css';

function App() {
  return (
    <div className ="grid grid-cols-6 gap-4">
      <div className="col-span-1 bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\sidebar1.jpg')]">
      </div>
      <div className = 'col-span-4'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Join></Join>
        <ImagePane></ImagePane>
      </div>
      <div className="col-span-1 bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\sidebar1.jpg')]">
      </div>
      
    </div>
  );
}

export default App;
