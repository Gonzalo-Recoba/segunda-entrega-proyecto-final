import { Link } from 'react-router-dom'

export default function ErrorPage(){
  return (
    <>
        <main className="caja_central pt-5 main-error"> 
            <div className="text-center w-50 mx-auto wow error animate__backInDown">
                <Link to="/"><img src="../img/error404.gif" className="error-404" alt="Error 404, página en mantenimiento."/></Link>
            </div>
        </main>
    </>
  )
}

