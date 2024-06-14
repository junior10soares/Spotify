import Article from "@/components/Article";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Siderbar from "@/components/Siderbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home(){
  return(
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Siderbar />
        <main className="flex-1 p-6 bg-zinc-900">
          <div className="flex items-center gap-4">
            <button title="Voltar" className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button title="Avançar" className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>
          <Section />
          <h1 className="font-semibold text-2xl mt-10">Made for Junior Soares</h1>
          <Article />
        </main>
      </div>
      <Footer />
    </div>
  )
}