import React from 'react';
import CardServicios from '../CardServicios/CardServicios';
import Carousel from '../Carousel/Carousel';




export default function ListaServicios(){
    return(
        <div className='container-fluid'>
            <Carousel />
            <h1 className='text-center mt-4 mb-4'>Principales servicios:</h1>
            <div className='row'>
                <CardServicios/>
            </div>
        </div>
    );
}