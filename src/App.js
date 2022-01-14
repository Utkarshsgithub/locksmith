// CSS IMPORTS
import './App.css';
import './css/navbar.css';
import './css/top.css';
import './css/tabs.css';
import './css/service.css';
import './css/all-services.css';
// COMPONENTS IMPORTS
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Top from './components/Top';
import Service from './components/Service';
import AllServices from './components/AllServices';

function App() {
  return (
    <>
      <Navbar />
      <Top />
      <div className="container">
        <Tabs />
        <Service />
      </div>
      <AllServices />
    </>
  );
}

export default App;
