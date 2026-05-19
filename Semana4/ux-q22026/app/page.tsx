'use client';
import { useState } from "react";

import Boton from "./components/boton";

export default function Home() {
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
  const [password,setPassword] = useState<string>("");
  const modificarValor = ()=>{
    setIsLoggedIn(!isLoggedIn);
}

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

      <input type="text" value={password} onChange={(event)=>{setPassword(event.currentTarget.value)}}/>
      
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
