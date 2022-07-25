import React, {Component} from "react";
import {StateBarStyled, TextoHoraStyled, IconConnectionStyled, IconWifiStyled, IconBatteryStyled} from '../styles/Styles.js';

export default class StateBar extends Component{
  render(){
    return(         
          <StateBarStyled>
            <TextoHoraStyled>9:45</TextoHoraStyled>
            <div className="iconos-statebar">
              <IconConnectionStyled src="https://res.cloudinary.com/margeek/image/upload/v1658090763/reto-2/iconConnection-SVG_pnqweg.svg" alt="" />
              <IconWifiStyled src="https://res.cloudinary.com/margeek/image/upload/v1658090757/reto-2/iconWifi-SVG_uk9gbr.svg" alt="" />
              <IconBatteryStyled src="https://res.cloudinary.com/margeek/image/upload/v1658091637/reto-2/iconBattery-SVG_zbycbw.svg" alt="" /> 
            </div>
          </StateBarStyled>
    )
  }
}