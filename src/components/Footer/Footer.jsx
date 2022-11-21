export default function Footer(){
    return(
        <footer className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="redes-sociales col-sm-12 col-md-4 mt-2">
                        <a href="/" target="_blank"><img src="img/iconos/twitter.png" alt="icono representativo de Twitter" /></a>
                        <a href="/" target="_blank"><img src="img/iconos/instagram.png" alt="icono representativo de Instragram" /></a>
                        <a href="/" target="_blank"><img src="img/iconos/facebook.png" alt="icono representativo de Facebook" /></a>
                    </div>
                    <div className="copy col-sm-12 col-md-4 mt-2">
                        <h6 className="ff-rw fw-200 fs-n">© 2022. Todos los derechos reservados.</h6>
                    </div>
                    <div className="pie-contacto col-sm-12 col-md-4 mt-2 mt-2">
                    <a href="https://goo.gl/maps/gePNVgzgK8NoPjXs8"><img src="img/iconos/ubicacion.png" alt="icono representativo de ubicacion" /></a>
                    <a href="/"><img src="img/iconos/telefono.png" alt="icono representativo de telefono" /></a>
                    <a href="/"><img src="img/iconos/e-mail.png" alt="icono representativo de email" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}