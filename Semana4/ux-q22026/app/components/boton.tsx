import Image from "next/image";

const Boton = ()=>{
    return (
        <div className="mb-8">
          <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p>titulo</p>
        <p>descripcion</p>
       <div className="mt-6">
         <button className="ml-2"> ver!</button>
        
        <button className="ml-2"> comentarios</button>
       </div>
        </div>
    )
};

export default Boton;
