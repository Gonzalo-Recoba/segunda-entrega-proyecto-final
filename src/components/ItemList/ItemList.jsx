import Item from "../Item/Item";
import React from "react";

export default function ItemList({servicios}){
    return(
        servicios.map(servicio => <Item key={servicio.id} servicio={servicio}/>)
    )
}