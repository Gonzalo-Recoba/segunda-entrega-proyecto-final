import { gFetch } from '../../utils/gFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import LoadingPage from '../LoadingPage/LoadingPage';


export default function CardServicios(){
    const [servicios, setServicios] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()        
        

    useEffect(() =>{
        if (categoriaId) {
            gFetch()
                .then(res => setServicios(res.filter(servicio => servicio.categoria === categoriaId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(!true))
        } else {
            gFetch()
                .then(res=> setServicios(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(!true))
        }
    }, [categoriaId])
    
    return(
        loading ? <LoadingPage/> : <ItemList servicios={servicios}/>
    )
}