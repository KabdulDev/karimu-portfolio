import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from './RoutingPages/Home';
import About from './RoutingPages/About';
import Projects from './RoutingPages/Projects';
import Contact from "./RoutingPages/Contact";


function Routing() {
    return (
        <Router>
            <div className="NavHeader">
                <ul className="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                </Switch>



            </div>

            <div>
                
            </div>
        </Router>
    )
}

export default Routing;