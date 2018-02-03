import React from "react";
import "./Tile.css"

const Tile = (props) =>
    <div className="tile shadow">
        <img src={props.img} alt={props.name}/>
    </div>

export default Tile;