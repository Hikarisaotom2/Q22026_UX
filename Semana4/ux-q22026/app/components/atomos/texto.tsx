type textoProps = {
    texto:string;
}
const Texto = ({texto}:textoProps)=>{
    return (
        <> 
         <p className="text-blue-600 dark:text-sky-400">{texto}</p>
        </>
      
        
    )
        
}


export default Texto;