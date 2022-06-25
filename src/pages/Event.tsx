import { CaretRight } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

import ignite_lab from "/src/assets/ignite-lab.png"

export function Event(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col  min-h-screen">
      <Header />

      <main className="flex flex-1">
        {
          slug
            ? <Video lessonSlug={slug} />
            : (
              <div className="flex-1">
                <div className="bg-black flex justify-center">
                  <div className="h-full w-full max-w-[1100px] max-h-[100vh] aspect-video flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">Bem-Vindo ao Ignite Lab!</h1>

                    <img src={ignite_lab} alt="" className="w-[600px]" />

                    <Link to="/event/lesson/abertura-do-evento-ignite-lab" className="flex gap-4 justify-center items-center hover:text-green-300 transition-colors">
                      <p className="text-xl">Selecione uma aula para começar sua jornada</p>
                      <CaretRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            )
        }
        <Sidebar />
      </main>
    </div>
  )
}
