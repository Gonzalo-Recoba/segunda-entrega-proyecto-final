import { Link } from "react-router-dom";

export default function Item({servicio}){
    return(
        <div className='col-md-3 col-sm-6 '>
            <div className=" mt-2 mb-4 mx-auto cardDestino">
                <div>
                    <div className="card h-100">
                        <img src={servicio.imagen1} className="card-img-top" alt="descripcion"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{servicio.nombre}</h5>
                            <div className="text-muted text-center mb-1">{servicio.ciudad}</div>
                        </div>
                        <div className="card-footer d-flex">
                            <Link to={`/detail/${servicio.id}`} className='btn btnn btn-info w-75 mx-auto'>Ver mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}