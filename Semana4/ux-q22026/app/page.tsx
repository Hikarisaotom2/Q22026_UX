'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
  const [errores,setErrores] = useState<string[]>([]);
  const [password,setPassword] = useState<string>("");


  // useEffect(/*callback*/,/*dependencias*/);


  const validarContrasena =  ()=>{
   const nuevoErrores = [];
    if(password.length<8){
      nuevoErrores.push('La contraseña debe tener almenos 8 caracteres');
   }

  if(!password.includes("!") ){
      nuevoErrores.push('La contraseña debe tener un caracter especial caracteres');
   }

   if(!password.includes("0")){
      nuevoErrores.push('La contraseña debe tener un caracter especial caracteres');
   }

    setErrores(nuevoErrores);
}


// use effect con una dependencia.
  useEffect(()=>{
    console.log("ejecutando useeffect....")
      validarContrasena();
  },[password]);

  // useeffect reacionando al primer render. 
  useEffect(()=>{
    //set loading true...
      console.log('primer render')
      //peticion a la BD.....
    // set loading false
  }, []);

  // useeffect que reacciona. todos los renders. .......
  useEffect(()=>{
   console.log('se detecto un render....') 
  });

const validar = ()=>{
  if(password.length<=8){
    console.log('La contrasena debe tener 8 caracteres')
  }
}
  return (
    <div 
    className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <h1>{password}</h1>
      {
        errores.map((it, key)=>{
          return <h2 key={key}>{it}</h2>
        })
      }
      <input type="text" value={password} onChange={(event)=>{setPassword(event.currentTarget.value) }}/>
      
      {
        isLoggedIn ? <h1>Hola fulano</h1> : <h1>Adiosin</h1>
      }

      <button onClick={()=>{
    setIsLoggedIn(!isLoggedIn);
    console.log('click!!!!');
}}> {isLoggedIn ? 'log out': 'log in'}</button>
      
      

    </div>
  );
}
