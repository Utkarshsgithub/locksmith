import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// CSS IMPORTS -------------------
import "./App.css";
import "./css/navbar.css";
import "./css/top.css";
import "./css/tabs.css";
import "./css/service.css";
import "./css/all-services.css";
import "./css/cta.css";
import "./css/footer.css";
import "./css/end.css";
import "./css/service-pages.css";
import "./css/contact.css";
import "./css/about.css";
import "./css/res-top.css";
import "./css/res-service.css";
import "./css/res-service-page.css";
// --------------------------------

// COMPONENTS IMPORTS -----------------------------
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Top from "./components/Top";
import AllServices from "./components/AllServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Automotive from "./components/Automotive";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import Emergency from "./components/Emergency";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// -------------------------------------------------

function App() {
  const [tab, setTab] = useState(1);
  const [progress, setProgress] = useState(0)

  console.log(tab);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <Top setProgress={setProgress}/>
              <Tabs setProgress={setProgress} tab={tab} setTab={setTab} />
            <AllServices setProgress={setProgress} />
            <Cta setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/about">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <AboutUs setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/contact">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <ContactUs setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/automotive-service">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <Automotive setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/residential-service">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <Residential setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/commercial-service">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <Commercial setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
          <Route exact path="/emergency-service">
            <LoadingBar
              color="#96151d"
              progress={progress}
            />
            <Navbar setProgress={setProgress} />
            <Emergency setProgress={setProgress} />
            <Footer setProgress={setProgress} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
