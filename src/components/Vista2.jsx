import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ImgVistaStyle, InputStyled, Texto1Styled, Texto2Styled} from '../styles/Styles.js';
import Slider from './Slider';

export default function Vista2() {
    const navigate = useNavigate();
    const navigateToVista3 = () =>{
        navigate('/Vista3');
    };

    return (
        <div className="vista2">
            <ImgVistaStyle>
                <img className="vista2-img2" src="https://res.cloudinary.com/margeek/image/upload/v1658090759/reto-2/img1-252x242-SVG_wxvq7k.svg" alt="mujer estudiando" /> 
            </ImgVistaStyle>
            <div className='texto-vista2'>
                <Texto1Styled>Explore new courses</Texto1Styled>
                <Texto2Styled>Study and watch all our new courses and there are many of them</Texto2Styled>
            </div>
            <Slider/>
               <InputStyled onClick={navigateToVista3} type="submit" value="Next"/>
        </div>
    );
}

