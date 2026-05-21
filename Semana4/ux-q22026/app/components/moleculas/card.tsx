import Texto from "../atomos/texto";
import Boton from "../atomos/boton";
import Imagen from "../atomos/imagen";

export type BotonProps = {
  titulo: string;
  descripcion: string;
  url: string;
  textoAction1: string;
  textoAction2: string;
  atrbutoOpcional?: string;
}

const Card = ({ url, titulo, descripcion, textoAction1, textoAction2 }: BotonProps) => {

  return (
    <div className="mb-8">
      <Imagen url={url} />
      <Texto texto={titulo} />
      <Texto texto={descripcion} />
      <div className="mt-6">
        <Boton texto={textoAction1} />
        <Boton texto={textoAction2} />
      </div>
    </div>
  )
};

export default Card;
