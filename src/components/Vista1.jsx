import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Logo170x138-SVG.svg';
import { Vista1Style, Vista1LogoStyle } from '../styles/Styles.js';

let timer;
export default function Vista1() {
  const navigate = useNavigate();
    useEffect(() => {
      timer = setTimeout(() => {
        navigate('/Vista2');
      }, 5000);
      return () => clearTimeout(timer);
       // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <Vista1Style>
      <Vista1LogoStyle src={logo} alt="logo" />
    </Vista1Style>
  );
}




