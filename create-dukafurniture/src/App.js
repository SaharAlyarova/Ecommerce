
import './App.css';
import FooterCom from './layout/footer';
import HeaderCom from './layout/header';
import ScrollToTop from "react-scroll-to-top";
import HomePage from './pages/home/home';
import "./homesixsection.scss"
import "./index.scss"

import RoutingCom from './routes/routing';
import RouteComm from './pages/datacards/routes/route';

function App() {
  return (
    <div className="App">
      <HeaderCom />
      <RouteComm/>
      
      <ScrollToTop smooth />
      
     

   <FooterCom/>
   
  
    </div>
  );
}

export default App;
