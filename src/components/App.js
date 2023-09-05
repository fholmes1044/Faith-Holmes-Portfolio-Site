import logo from '../logo.svg';
import '../App.css';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Blogs from './Blogs';
import Testimonials from './Testimonials';
import InstructionalDesignProjects from './InstructionalDesignProjects';
import SoftwareProjects from './SoftwareProjects';

function App() {
  return (
    <div className="App">
     <NavBar/>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
       <AboutMe/>
       <InstructionalDesignProjects/>
       <SoftwareProjects/>
       <Blogs/>
       <Testimonials/>
      <ContactForm/>
    </div>
  );
}

export default App;
