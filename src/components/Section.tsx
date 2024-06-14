import { Play } from "lucide-react";
import Image from "next/image";

export default function Section(){
    return(
        <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/1.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Seu Jorge</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition">
                <Image src="/2.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Carlinho Brown</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/3.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Nirvana</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/4.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Latino</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/5.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Elecktro</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/6.jpeg" width={104} height={104} alt="Capa de album"/>
                <strong>Roberto Carlos</strong>
                <button title="Play" className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                </button>
            </a>
      </div>
    )
}