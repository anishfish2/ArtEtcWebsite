import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import ImagePane from './components/ImagePane';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className ="grid grid-cols-6 gap-4 h-full">
    {/* <div className="col-span-1 bg-[url('images/sidebar1.jpg')] bg-[#B67B58]"> */}
    <div className="col-span-1 bg-[#DF6C36]">
      </div>
        <div className = 'col-span-4'>
          <Navbar></Navbar>
          <Hero></Hero>
          <div className ='pb-28'>
            <Info></Info>
          </div>
          
          <div className = 'pt-20'>
            <ImagePane></ImagePane>
            
          </div>
          <Contacts></Contacts>
        </div>
      {/* <div className="col-span-1 bg-[url('images/sidebar1.jpg')]"> */}
      <div className="col-span-1 bg-[#DF6C36]">

    </div>
  </div>
  );
}

export default App;
