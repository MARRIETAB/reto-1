import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ImgVistaStyle, Texto1Styled, Texto2Styled, InputStyled} from '../styles/Styles.js';
import Slider from './Slider';

export default function Vista3() {
    const navigate = useNavigate();
    const navigateToVista4 = () =>{
        navigate('/Vista4');
    };
    
    return (
        <div className="vista3">
            <ImgVistaStyle>
                <img className="vista3-img2" src="https://res.cloudinary.com/margeek/image/upload/v1658091054/reto-2/img2-260x250_rpetko.png" alt="mujer estudiando" /> 
            </ImgVistaStyle>
            <div className='texto-vista3'>
                <Texto1Styled>See your goals</Texto1Styled>
                <Texto2Styled>Learn and learn new things every day and get rewards be on top</Texto2Styled>
            </div>
            <Slider/>
            <InputStyled onClick={navigateToVista4} type="submit" value="Next"/>
        </div>
    );
}
