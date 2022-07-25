import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ImgVistaStyle, Texto1Styled, Texto2Styled, InputStyled} from '../styles/Styles.js';
import Slider from './Slider';

export default function Vista4() {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/Login');
    };

    return (
        <div className="vista4">
            <ImgVistaStyle>
                <img className="vista4-img2" src="https://res.cloudinary.com/margeek/image/upload/v1658091054/reto-2/img3-320x250_fb92md.png" alt="mujer estudiando" /> 
            </ImgVistaStyle>
            <div className='texto-vista4'>
                <Texto1Styled>Move on to the next course</Texto1Styled>
                <Texto2Styled>Don't stop at one, start learning the next and make progress.</Texto2Styled>
            </div>
            <Slider/>
            <InputStyled onClick={navigateToLogin} type="submit" value="Next"/>
        </div>
    );
}

