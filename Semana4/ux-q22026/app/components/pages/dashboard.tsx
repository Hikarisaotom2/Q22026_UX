'use client';
import { useEffect, useState } from "react";
import Card, { BotonProps } from "../moleculas/card"



const DashBoard = () => {

    const [series, setSeries] = useState<BotonProps[]>([])

    useEffect(() => {

        //solicitar data de la db.....
        setSeries([
            {
                titulo: 'One piece',
                descripcion: 'Piratas',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            },
            {
                titulo: 'Vinlad Saga',
                descripcion: 'Vikingos',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            },
             {
                titulo: 'Tiktok',
                descripcion: 'videos cortos...',
                textoAction1: 'like',
                textoAction2: 'sus',
                url: "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg"
            }
        ])

    }, []);
    return (
        <div>
            {series.map((valor, key) => {
                return (<Card
                    key={key}
                    titulo={valor.titulo}
                    descripcion={valor.descripcion}
                    textoAction1={valor.textoAction1}
                    textoAction2={valor.textoAction2}
                    url={valor.url} />)
            })}

        </div>
    )
}


export default DashBoard;