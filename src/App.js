import React from "react";
import './App.css';
import {Link, BrowserRouter as Router, Route} from "react-router-dom";

import Contacto from "./components/contacto.component";
import Habilidades from "./components/habilidades.component";
import Sobremi from "./components/sobremi.component";
import Landingpage from "./components/Landingpage.component";
import Nube from "./components/nube.component";

function App() {
  return (
    <div className="fondo">
    <Nube />
      <Router>
      <ul className="lista">
        <li><Link to="/" className="link">VK</Link></li>
        <li><Link to="/habilidades"  className="link" >Habilidades</Link></li>
        <li><Link to="/sobremi"  className="link">Sobre Mi</Link></li>
        <li> <Link to="/contacto" className="link">Contacto</Link></li>
      </ul>
      <div className="hoja">
      <Route path="/contacto" component={Contacto}></Route>
      <Route path="/habilidades" component={Habilidades}></Route>
      <Route path="/sobremi" component={Sobremi}></Route>
      <Route exact path="/" component={Landingpage}></Route>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
