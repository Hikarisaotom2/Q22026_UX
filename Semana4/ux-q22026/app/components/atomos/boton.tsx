type botonProps = {
    texto:string;
    actionBtn: ()=>void;
}
const Boton = ({texto,actionBtn}:botonProps)=>{
    return(
         <button className="ml-2 bg-blue-500 rounded-l" onClick={actionBtn}> {texto}</button>
    )
}

export default Boton;