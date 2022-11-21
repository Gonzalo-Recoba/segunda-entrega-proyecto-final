import { useState } from 'react'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';

const Contador = ({ initial=1, stock=15, servicio={servicio}, onAdd }) => {
    return (
      <>
        <Intercambiabilidad servicio={servicio}/>
      </>
    )
}

export default Contador
