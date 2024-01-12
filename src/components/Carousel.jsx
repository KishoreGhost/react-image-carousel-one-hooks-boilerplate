import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex, setCurrIndex] = useState(0)

    function goBack(){
        setCurrIndex(currIndex - 1)
        currIndex <= 0 ? setCurrIndex(images.length - 1) : setCurrIndex(curr + 1)
    }

    function goForward(){
        setCurrIndex(currIndex + 1)
        currIndex == images.length + 1 ? setCurrIndex(0) : setCurrIndex(curr + 1)
    }

    return(
        <>
            <div className="parent-div">
                <button onClick={goBack} className="arrow-button"><ArrowBackIosIcon /></button>
                <div className="content-div">
                    <h2 className="title-box">{images[currIndex].title}</h2>
                    <img src={images[currIndex].img} alt="" className="carousel-img" />
                    <h3 className="subtitle-box">{images[currIndex].subtitle}</h3>
                </div>
                <button onClick={goForward} className="arrow-button"><ArrowForwardIosIcon /></button>
            </div>
        </>
    )
}

export default Carousel;