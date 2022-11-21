export default function LoadingPage(){
    return(
        <>
            <div className="alert alert-success" role="alert">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h3 className='ms-4'>Cargando servicios...</h3><br />
                </div>
            </div>
        </>
    )
}