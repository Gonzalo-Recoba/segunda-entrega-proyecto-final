import servicios from './servicios.json'

export function gFetch(id){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(id ? servicios.find(servicio => servicio.id === id) : servicios)
            rej('promesa rechazada')
        }, 100)
    })
}