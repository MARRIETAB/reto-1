import React, { Component } from 'react';
import {ImgSliderStyled} from '../styles/Styles.js';

class Slider extends Component {
    render() {
        return (
            <div>
                <ImgSliderStyled src="https://res.cloudinary.com/margeek/image/upload/v1658090758/reto-2/Slider-SVG_kvqzd5.svg" alt="" />
            </div>
        );
    }
}

export default Slider;