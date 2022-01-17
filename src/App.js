import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS IMPORTS
import "./App.css";
import "./css/navbar.css";
import "./css/top.css";
import "./css/tabs.css";
import "./css/service.css";
import "./css/all-services.css";
import "./css/cta.css";
import "./css/footer.css";
import "./css/end.css";
////////////////////////////////

// COMPONENTS IMPORTS
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Top from "./components/Top";
import AllServices from "./components/AllServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";
///////////////////////////////////////////////////

function App() {
  const [tab, setTab] = useState(1);

  console.log(tab);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Top />
            <div className="container">
              <Tabs tab={tab} setTab={setTab} />
            </div>
            <AllServices />
            <Cta />
            <Footer />
          </Route>
          <Route exact path="/service">
            <ServicePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;