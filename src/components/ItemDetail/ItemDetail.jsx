import React from 'react'
export default function ItemDetail({servicio}){
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
  return (
        <div className="container-fluid px-10">
          <div className='row'>
            <div className='col-12 d-flex'>
                <img className='w-25 img-img mx-auto img-thumbnail' src={servicio.imagen1} alt="imagen alojamiento" />
            </div>
            <div className='col-12 '>
              <div className="col-12 mx-auto mt-3 mb-3">
                  <h3 className="text-center">{servicio.nombre}</h3>
                  <p className="card-text text-center mb-1"><small className="text-muted">{servicio.ciudad}</small></p>
              </div>
              <div className="row mb-3">
                  <p className="card-text text-center descripcion-alojamiento">{servicio.descripcion}</p>           
              </div> 
              <p className='mx-auto text-center'><b>Precio: ${servicio.precio}</b></p>                          
              <div className='row'>
                <div className="col-12 col-sm-6 mx-auto">
                    <label htmlFor="CheckIn" className="form-label">Checkin:</label>
                    <input type="date" className="form-control" name="CheckIn" id='checkIn' />
                </div>
                <div className="col-12 col-sm-6 mx-auto">
                    <label htmlFor="CheckIn" className="form-label">Checkout:</label>
                    <input type="date" className="form-control" name="CheckOut" id='checkOut'/>
                </div>
                <div className="col-12 col-sm-4 mx-auto">
                    <span className="text-center">Habitaciones</span>
                    <input type="number" className="form-control" aria-label="Cantidad de habitaciones" min="1" max="5" id='cantHabitaciones'/>
                </div>
                <div className="col-12 col-sm-4 mx-auto">
                    <span className="text-center">Adultos</span>
                    <input type="number" className="form-control" aria-label="Cantidad de adultos" min="1" max="5" id='cantAdultos'/>
                </div>
                <div className="col-12 col-sm-4 mx-auto">
                    <span className="text-center">Niños</span>
                    <input type="number" className="form-control" aria-label="Cantidad de niños" min="1" max="5" id='cantNinos'/>
                </div>
              </div>
              <div className="justify-content-center mx-auto d-flex mt-2">
                  <button type="button" className='btn btnn btn-info w-50 mx-auto' onClick={agregarAlCarrito}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
  )
}