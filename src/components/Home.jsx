import React from 'react';
import { useLocation } from 'react-router-dom';
import { Texto1Styled} from '../styles/Styles.js';

export default function Home() {
    const { state } = useLocation();
   
    return (
        <div className="Home">
            
         <Texto1Styled>Welcome {state.user.name}</Texto1Styled>
            
            
            
        </div>
    );
}

