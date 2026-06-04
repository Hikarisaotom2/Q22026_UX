'use client';
import { useEffect, useState } from "react";
import Card, { BotonProps } from "../moleculas/card"
import axios from "axios";



const DashBoard = () => {

    const [series, setSeries] = useState<BotonProps[]>([])

    console.log('Variable de entorno:',process.env.NEXT_PUBLIC_API_URL);

    useEffect(() => {

        // //solicitar data de la db.....
        // llamar a nuestrop BE y obtener la informacion 

        
       let series =  axios.get(process.env.NEXT_PUBLIC_API_URL+"/getSeries")

       console.log('SERIES DESDE BACKEND!!!!!!',series)
    //    setSeries(series);
    }, []);
    return (
        <div>
            {/* {series.map((valor, key) => {
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
            })} */}
            <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>

        </div>
    )
}


export default DashBoard;