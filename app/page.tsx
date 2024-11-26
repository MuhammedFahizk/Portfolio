
import {  Div } from "@/app/Components/Common/Index";
import {  NavBar } from "@/app/Components/Layout/Index";
import {Hero, About} from "@/app/Components/sections/Index";
import { Skills } from "@/app/Components/sections/Skills";
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
