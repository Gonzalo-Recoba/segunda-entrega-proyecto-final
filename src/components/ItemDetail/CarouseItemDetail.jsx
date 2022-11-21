

export default function CarouselItemDetail({servicio}){
    return(
        <>
            <div className=" mx-auto col-12 col-md-6 d-flex">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={servicio.imagen1} className="d-block w-80 img-thumbnail" alt="descripcion imagen"/>
                        </div>
                        <div className="carousel-item">
                            <img src={servicio.imagen2} className="d-block w-80 img-thumbnail" alt="descripcion imagen"/>
                        </div>
                        <div className="carousel-item">
                            <img src={servicio.imagen3} className="d-block w-80 img-thumbnail" alt="descripcion imagen"/>
                        </div>
                        <div className="carousel-item">
                            <img src={servicio.imagen4} className="d-block w-80 img-thumbnail" alt="descripcion imagen"/>
                        </div>
                        <div className="carousel-item">
                            <img src={servicio.imagen5} className="d-block w-80 img-thumbnail" alt="descripcion imagen"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}