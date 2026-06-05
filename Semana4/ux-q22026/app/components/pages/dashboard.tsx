'use client';
import { useEffect, useState } from "react";
import Card, { BotonProps } from "../moleculas/card"
import axios from "axios";



const DashBoard = () => {

    const [series, setSeries] = useState<BotonProps[]>([])

    console.log('Variable de entorno:',process.env.NEXT_PUBLIC_API_URL);
    const ejecutarPromise = async ()=>{
    try{

            /*
            1)Await/async: bloquea el lfujo async js y retiene el hilo principal hasta que el trabajo termine  
            2) then/catch : recupera el trabajo async, pero no bloquea el hilo principal
            */
            //then 
            let series =  await axios.get(process.env.NEXT_PUBLIC_API_URL+"/getSeries")
            console.log('RESPUESTA COMPLETA DEL BE!!!!!!',series)
              console.log('RESPUESTA.DATA',series.data)
              console.log('RESPUESTA.DATA.SERIES',series.data.series)
            series = series.data.series
            console.log(series);
            setSeries(series);
        }catch(e){
            console.error('Algo salio mal ', e)
        }
    }
    useEffect(() => {

        // //solicitar data de la db.....
        // llamar a nuestrop BE y obtener la informacion 
       ejecutarPromise();
   
    }, []);


        useEffect(() => {
console.log('el state es ',series)
   
    }, [series]);
    return (
        <div>
            {series.map((valor, key) => {
                return (<Card
                    key={key}
                    titulo={valor.titulo}
                    descripcion={valor.descripcion}
                    textoAction1={valor.textoAction1}
                    textoAction2={valor.textoAction2}
                    url={valor.url} 
                    actionBtn1={()=>{console.log('like')}}
                    actionBtn2={()=>{console.log('suscribirse!')}}
                    />)
            })}
            <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>

        </div>
    )
}


export default DashBoard;