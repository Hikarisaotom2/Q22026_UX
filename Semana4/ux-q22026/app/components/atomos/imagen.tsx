import Image from "next/image";

type imageProps = {
    url:string;
}
const Imagen = ({url}:imageProps)=>{
    return (
        <Image
        //   className="dark:invert"
          src={url}
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
    )
}

export default Imagen;