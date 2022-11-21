import { useState } from "react";
import { Link } from "react-router-dom";

function InputCount(){
    return(
    <>
        <Link to='/cart'>
            <button className="btn btn-success mx-2" >Finalizar reserva</button>
        </Link>
        <Link to='/'>
            <button className="btn btnn btn-primary mx-2" >Nueva reserva</button>
        </Link>
    </>
)
}

function ButtonCount ({handleInter}){
    return <button className="btn btnn btn-info w-30" onClick={handleInter}>Reservar</button>
}

export default function Intercambiabilidad({servicio}){
    const agregarAlCarrito = () => {
        let checkIn = document.getElementById("checkIn").value;
        let ingreso = new Date(checkIn);
        let checkOut = document.getElementById("checkOut").value;
        let salida = new Date(checkOut);
        let dias = (parseInt((salida - ingreso)/(1000*60*60*24)));
        let habitaciones = document.getElementById("cantHabitaciones").value;
        let adultos = document.getElementById("cantAdultos").value;
        let ninos = document.getElementById("cantNinos").value;
        console.log(`
            Destino: ${servicio.nombre}
            Cantidad de dias: ${dias}
            Cantidad de habitaciones: ${habitaciones}
            Cantidad de adultos: ${adultos}
            Cantidad de niños: ${ninos}
      `);
        alert(`
            Destino: ${servicio.nombre}
            Cantidad de dias: ${dias}
            Cantidad de habitaciones: ${habitaciones}
            Cantidad de adultos: ${adultos}
            Cantidad de niños: ${ninos}
        `);
      };

    const [inputType, setInputType] = useState('button')
    const handleInter = () => {
        setInputType('input')
        agregarAlCarrito()
    }
    return(
        <>
            {
                inputType === 'button' ?
                <ButtonCount handleInter={handleInter}/>
                :
                <InputCount/>
            }
        </>
    )
}
