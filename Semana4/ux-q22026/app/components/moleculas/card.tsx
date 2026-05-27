import Texto from "../atomos/texto";
import Boton from "../atomos/boton";
import Imagen from "../atomos/imagen";

export type BotonProps = {
  titulo: string;
  descripcion: string;
  url: string;
  textoAction1: string;
  textoAction2: string;
  estilo?: string;
  actionBtn1: ()=>void;
  actionBtn2: ()=>void;

}

const Card = ({ url, titulo, descripcion, textoAction1, textoAction2, estilo, actionBtn1, actionBtn2 }: BotonProps) => {

  return (
    <div className={"mb-8 "+estilo}>
      <Imagen url={url} />
      <Texto texto={titulo} />
      <Texto texto={descripcion} />
      <div className="mt-6">
        <Boton texto={textoAction1} actionBtn={actionBtn1}/>
        <Boton texto={textoAction2} actionBtn={actionBtn2} />
      </div>
    </div>
  )
};

export default Card;
