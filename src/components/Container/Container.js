import React from "react";
import Tile from "../Tile/Tile"
import images from "../../images.json";

function shuffleArray(array) {

    let currentIndex = array.length;
    let tempValue;
    let randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array
}

class Container extends React.Component {

    state = {
        images: shuffleArray(images),
        clicked: [],
        score: 0,
        gameState: "playing"
    };
    
    //every time a tile is clicked
    tileClickHandler = (id) => {

        let newState = this.state

        if(newState.clicked.includes(id)){

            newState.gameState = "lost";
        } else {

            newState.clicked.push(id);
            newState.images = shuffleArray(this.state.images);
            newState.score ++;
        };

        this.setState(newState);
    };

    render = () => 
        <div className="col col-xs-12 text-center">
            
            {this.state.gameState === "won" ?
                null
                :
                this.state.images.map(image => 
                    <Tile key={image.id} {...image} clickHandler={() => this.tileClickHandler(image.id)}/>
                )
                
            }
        </div>
}

export default Container;