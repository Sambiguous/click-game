import React from "react";
import Tile from "../Tile/Tile"
import images from "../../images.json";


class Container extends React.Component {

    state = {
        images: images
    }

    render = () => 
        <div className="col col-xs-12 text-center">
            {this.state.images.map(image => 
            <Tile key={image.id} img={image.img} />)}
        </div>

}

export default Container;