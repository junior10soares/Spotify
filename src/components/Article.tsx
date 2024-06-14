import Image from "next/image";

export default function Article(){
    return(
        <div className="grid grid-cols-9 gap-3 mt-3">    
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <Image src="/7.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong className="font-semibold">Chico Buarque</strong>
                <span className="text-sm text-zinc-400">Hollanda</span>
              </div>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <Image src="/8.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong className="font-semibold">Shakira</strong>
                <span className="text-sm text-zinc-400">Chantaje</span>
              </div>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <Image src="/9.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong className="font-semibold">Bezerra da Silva</strong>
                <span className="text-sm text-zinc-400">Hollanda</span>
              </div>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <Image src="/10.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong className="font-semibold">Jorgen Ben</strong>
                <span className="text-sm text-zinc-400">País tropical</span>
              </div>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <Image src="/11.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong className="font-semibold">Milton N.</strong>
                <span className="text-sm text-zinc-400">Travessia</span>
              </div>
            </a>
          </div>
    )
}