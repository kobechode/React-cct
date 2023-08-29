import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
 
import Navbar from './Navbar';
import Homes from './Components/Home/Homes';
import Coursess from './Components/Courses/Coursess';
import News from './Components/News/News';
import Contacts from './Components/Contacts/Contacts';
import Aboutus from './Components/About/Aboutus';
 


function App() {


  const  slides = [


            

    {url:'https://github.com/kobechode/CCT/blob/master/dist/img/slider-1.png?raw=true'},
    {url:'https://github.com/kobechode/CCT2/blob/master/dist/img/slider2.png?raw=true'},
    {url:'https://github.com/kobechode/CCT2/blob/master/dist/img/slider3.png?raw=true'},


];

  let Component
 switch (window.location.pathname){



case "/Home": 
  Component = <Homes/>
  break

  case "/Courses":
    Component = <Coursess/>
    break

    case "/News":
      Component = <News/>
      break

      case "/Contacts":
        Component = <Contacts/>
        break

        case "/Aboutus":
          Component = <Aboutus/>
          break
 }

 
  return (
   

 
    <div className="App">
         <Navbar/>
          {Component}
    

          <div style={{backgroundImage: `url(${slides[2].url})`}} className=' slider-content   w-full h-full rounded-2xl bg-center  ' ></div>       

         
  
    </div>
  );
}

export default App;
