
import { Button, Div } from "@/Components/Common/Index";
import { Background, NavBar } from "@/Components/Layout/Index";
import {Hero, About} from "@/Components/sections/Index";
import { Skills } from "@/Components/sections/Skills";
export default function Home() {
  return (
    <>
          <Div className="relative bg-info text-white overflow-scroll">
          <NavBar/>
          <Hero/>
          <About/>
          <Skills/>
          </Div>

    </>
  );
}
