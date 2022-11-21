import Contador from "../Contador/Contador";
import CarouselItemDetail from "./CarouseItemDetail";

export default function ItemDetail({servicio}){
  return (
    <>
    {/* <img className='w-100 img-img mx-auto img-thumbnail' src={servicio.imagen1} alt="imagen alojamiento" /> */}
      <div className="container-fluid p-5">
          <div className="row">
          <CarouselItemDetail servicio={servicio}/>
          <div className='col-12 col-md-6 mx-auto '>
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
                <Contador stock={100} initial={1} servicio={servicio}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}