type botonProps = {
    texto:string;
}
const Boton = ({texto}:botonProps)=>{
    return(
         <button className="ml-2 bg-blue-500 rounded-l"> {texto}</button>
    )
}

export default Boton;