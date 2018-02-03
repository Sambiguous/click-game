import React from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => 

    <div className="container">
        <div className="jumbotron">
            <h1 className="display">spongebob memory game</h1>
            <p className="lead">try to click all of the pictures without clicking the same picture twice</p>
        </div>
        
        
        <div className="row">
            <Board />
        </div>
    </div>

export default App;
