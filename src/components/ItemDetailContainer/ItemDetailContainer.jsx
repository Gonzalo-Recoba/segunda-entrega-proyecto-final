import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer(){
  const [servicio, setServicio] = useState({})
  
  const {id} = useParams()
  useEffect(()=>{
    gFetch(id)
    .then(res => setServicio(res))
    .catch(err => console.log(err))
  }, [id])


  return (
      <>
        <ItemDetail servicio={servicio}/>
      </>
  )
}
