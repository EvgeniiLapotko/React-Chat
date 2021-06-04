import React from "react";
import Auth from "./pages/Auth";
import Home from './pages/Home';
import {Route} from 'react-router-dom'

function App() {
    return (
        <div className="wrapper">
            <Route path="/login"><Auth /></Route>
            <Route exact path='/'><Home /></Route>
            
        </div>
    );
}

export default App;
